---
layout: post
title: Adaptive Software Rasterization with CUDA
tags: software rasterization, CUDA, GPU programming, rendering
---

Adaptive Rasterization for Microdisplaced Surfaces

My master thesis at the Karlsruhe Institute of Technology, 2015.

### Repository on GitHub

[![GitHub](https://img.shields.io/badge/GitHub-TobiasRp%2Fadaptive_rasterization-black?logo=github)](https://github.com/TobiasRp/adaptive_rasterization)

I was surprised to find that I had never published the code for my master's
thesis, so I uploaded it to GitHub.

The repository contains a software rasterization framework that runs entirely
on the GPU using CUDA and implements a form of adaptive rasterization.

### Adaptive Rasterization for Microdisplaced Surfaces

In my thesis I proposed a rasterization-based pipeline for real-time
rendering. It efficiently renders highly detailed objects by applying
microdisplacement to surfaces: the pipeline performs displacement mapping
and evaluates Bézier triangles on a per‑pixel basis. I implemented the
rendering pipeline in software and achieved interactive frame rates by
executing it completely on the GPU.

To apply accurate microdisplacement, the surface is modified by changing
the positions of individual shading fragments. This is problematic for
contemporary graphics pipelines because some pixels can end up without
fragments. My modified pipeline realizes adaptive rasterization: additional
fragments can be sampled adaptively after the usual rasterization stage.
Adaptive sampling of new fragments guarantees that all pixels are shaded,
so surfaces can be displaced without costly tessellation, which is
inefficient for small, detailed displacements.

Suffice to say, the idea never really took off. Partly because I never
finished the corresponding research paper. And even though it's an
interesting idea, it would likely require a costly hardware redesign.

Software rendering of the Crytek Sponza scene (262,267 triangles)
rendered in 84.3 ms on an NVIDIA GeForce 750 Ti (vs. 1.19 ms with OpenGL): 
![Rendered Crytek Sponza scene](/images/sponza.png)