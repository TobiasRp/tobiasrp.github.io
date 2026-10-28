---
title: "Tiles: Scheduling LLM Decoding as a Graph of Tiles"
summary: "A research runtime that turns LLM decoding from a graph of kernels into a graph of tiles. Tiles are the atomic unit of scheduled work: an offline planner assigns every tile to a fixed worker, and one persistent CUDA kernel executes that schedule for every token of Llama 3.2 1B on an 8 GB RTX 3050."
status: active
period: "2026"
order: 0
featured: true
cover: ../../assets/projects/tiles-comparison.png
coverAlt: "Decode latency against context length for TileInfer, PyTorch and llama.cpp on an RTX 3050, with the memory-bandwidth floor"
coverCaption: "Time per token against context length on an RTX 3050. TileInfer stays at 94 to 96% of the memory-bandwidth floor."
badges: ["CUDA", "GPU programming", "megakernels", "LLM inference"]
links:
  - label: "Blog post"
    href: "/posts/decoding-in-tiles/"
  - label: "Code"
    href: "https://github.com/TobiasRp/tiles"
---

Tiles tests an idea I had: the unit of scheduling for LLM inference should
be the tile, not the kernel. A conventional runtime executes a graph of
kernels, one per operator, and leaves it to the launch machinery to decide
when each kernel starts and how its blocks spread over the SMs. Tiles
reorganizes that kernel graph into a tile graph. Every operator is cut into
tiles, each a small range of output rows together with the work that
produces it, and dependencies run between tiles rather than between whole
operators. Small operations such as norms and activations fold into the
tiles next to them.

The idea builds on Hazy Research's
["Look Ma, No Bubbles!"](https://hazyresearch.stanford.edu/blog/2025-05-27-no-bubbles)
megakernel, and Tiles uses the same workload: Llama 3.2 1B in BF16 at batch
size one, with one user and one stream of tokens. At batch size one,
decoding is limited by memory bandwidth, so the measure of success is how
close each token gets to the time needed just to read the model's weights.

Their megakernel runs on H100 and B200 GPUs and schedules dynamically: an
interpreter on every SM starts an instruction once its inputs are ready
and loads the next weights while the current instruction finishes. On
those GPUs, reading the weights takes well under a millisecond, so every
microsecond of waiting counts. Tiles targets
my 8 GB GeForce RTX 3050, where the same weights take 11.6 ms, 8 of the 20
SMs already saturate DRAM, and a grid barrier costs under a microsecond.
Here, a static schedule is enough. With tiles as the atomic unit of work,
scheduling becomes an explicit, offline problem: a planner assigns every
tile to a fixed worker, one per SM, balances the bytes each worker streams,
and groups the tiles into waves separated by grid barriers. One persistent
CUDA kernel executes that schedule for each token and makes no scheduling
decision of its own. Because nothing is decided at run time, the whole
schedule can be validated before launch, and every run produces
bit-identical results.

The [blog post](/posts/decoding-in-tiles/) explains the design and the
measurements in detail.

[Blog post](/posts/decoding-in-tiles/)
| [Code](https://github.com/TobiasRp/tiles)

## What the code contains

- **TilePlan**, the offline planner in Python. It probes the compiled worker
  kernel for occupancy, imports a pinned Hugging Face checkpoint, builds the
  tile graph and its schedule, validates both, and packs the weights.
- **TileInfer**, the C++/CUDA runtime. It loads and re-validates a plan,
  checks that it was made for this worker binary and GPU, and runs up to
  64 tokens per cooperative launch, with greedy selection inside the kernel.
- **A CPU reference and parity checks** against Hugging Face Transformers,
  with calibrated BF16 tolerances.
- **Baselines and a showcase command.** One command builds everything, runs
  the checks, measures TileInfer against PyTorch (eager and CUDA Graph
  replay) and llama.cpp, and redraws the figures of the blog post.
- **An architecture document and a development log** that describe the
  design and every milestone, including the optimizations that were probed
  and rejected.

## Scope and code release

Tiles is research code, not a general inference engine. It supports one
model, one GPU architecture (compute capability 8.6), batch size one,
greedy decoding and BF16 weights; prefill still runs one token per step.
The code is on GitHub at
[github.com/TobiasRp/tiles](https://github.com/TobiasRp/tiles).
