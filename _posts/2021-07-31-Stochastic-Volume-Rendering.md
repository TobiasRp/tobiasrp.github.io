---
layout: post
title: Stochastic Volume Rendering of Multi‐Phase SPH Data
tags: scientific visualization, SPH, rendering
---

Visualization of large SPH data using a stochastic approach to volume rendering.

This project started as a master thesis of Max that I supervised.

Max Piochowiak, Tobias Rapp, Carsten Dachsbacher

Published in Computer Graphics Forum, 2020.

[Official version](https://doi.org/doi:10.1111/cgf.14121)

### Abstract

In this paper, we present a novel method for the direct volume rendering of large smoothed-particle hydrodynamics (SPH) simulation data without transforming the unstructured data to an intermediate representation. By directly visualizing the unstructured particle data, we avoid long preprocessing times and large storage requirements. This enables the visualization of large, time-dependent, and multivariate data both as a post-process and in situ. To address the computational complexity, we introduce stochastic volume rendering that considers only a subset of particles at each step during ray marching. The sample probabilities for selecting this subset at each step are thereby determined both in a view-dependent manner and based on the spatial complexity of the data. Our stochastic volume rendering enables us to scale continuously from a fast, interactive preview to a more accurate volume rendering at higher cost. Lastly, we discuss the visualization of free-surface and multi-phase flows by including a multi-material model with volumetric and surface shading into the stochastic volume rendering.

### Images

![Stochastic DVR](/images/stochastic_dvr.jpg)

_We visualize an SPH dataset of a fluid that rotates a turbine using volume rendering with surface shading (left). The datasets contains 86 million particles that are evaluated on-the-fly without significant preprocessing. We employ stochastic particle sampling during the SPH evaluation which substantially improves render times (center). This enables us to include expensive single scattering during volume rendering (right)._

### Downloads

[Paper (Open Access)](https://cg.ivd.kit.edu/publications/2020/stochastic_sph/cgf14121.pdf)
| [Video](https://cg.ivd.kit.edu/publications/2020/stochastic_sph/cgf14121-video.mp4)
| [Code](https://cg.ivd.kit.edu/publications/2020/stochastic_sph/cgf14121-code.zip)

