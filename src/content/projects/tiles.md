---
title: "Tiles: A Static Megakernel for LLM Decoding on a Small GPU"
summary: "A research runtime that decodes Llama 3.2 1B at batch size one as a single persistent CUDA kernel on an 8 GB RTX 3050. An offline Python planner fixes every task, byte and barrier ahead of time; the CUDA executor only follows the plan."
status: active
period: "2026"
order: 0
featured: true
cover: ../../assets/projects/tiles-comparison.svg
coverAlt: "Decode latency against context length for TileInfer, PyTorch and llama.cpp on an RTX 3050, with the memory-bandwidth floor"
coverCaption: "Time per token against context length on an RTX 3050. TileInfer stays at 94 to 96% of the memory-bandwidth floor."
badges: ["CUDA", "GPU programming", "megakernels", "LLM inference"]
links:
  - label: "Blog post"
    href: "/posts/decoding-in-tiles/"
  - label: "Code"
    href: "https://github.com/TobiasRp/tiles"
---

Tiles tests one hypothesis: that low-latency LLM decoding on a GPU can be
planned completely ahead of time. Instead of launching hundreds of kernels
per token, an offline planner cuts the whole token into small tile tasks,
assigns each to a fixed worker, and orders them into waves separated by
grid barriers. One persistent CUDA kernel then executes that plan and makes
no scheduling decision of its own.

The workload is deliberately narrow: Llama 3.2 1B in BF16, one user, one
stream of tokens, on an 8 GB GeForce RTX 3050. At batch size one, decoding is
limited by memory bandwidth, so the measure of success is how close each
token gets to the time needed just to read the model's weights. The
[blog post](/posts/decoding-in-tiles/) explains the design and the
measurements in detail.

[Blog post](/posts/decoding-in-tiles/)
| [Code](https://github.com/TobiasRp/tiles)

## What the code contains

- **TilePlan**, the offline planner in Python. It probes the compiled worker
  kernel for occupancy, imports a pinned Hugging Face checkpoint, builds and
  validates the plan, and packs the weights.
- **TileInfer**, the C++/CUDA runtime. It loads and re-validates a plan,
  checks that it was made for this worker binary and GPU, and runs up to
  64 tokens per cooperative launch, with greedy selection inside the kernel.
- **A CPU reference and parity checks** against Hugging Face Transformers,
  with calibrated BF16 tolerances.
- **Baselines and a showcase command.** One command builds everything, runs
  the checks, measures TileInfer against PyTorch (eager and CUDA Graph
  replay) and llama.cpp, and redraws the figures of the blog post.
- **Design notes and status records** that document each milestone,
  including the optimizations that were probed and rejected.

## Scope and code release

Tiles is research code, not a general inference engine. It supports one
model, one GPU architecture (compute capability 8.6), batch size one,
greedy decoding and BF16 weights; prefill still runs one token per step.
The code is on GitHub at
[github.com/TobiasRp/tiles](https://github.com/TobiasRp/tiles).
