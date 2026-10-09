---
title: "Stochastic Volume Rendering of Multi‐Phase SPH Data"
summary: "We render large, unstructured SPH simulations directly, without first converting the particle data into a volume. Particle sampling guided by the view and local data complexity makes ray marching faster, allowing the method to scale from interactive previews to more accurate renderings with multi-phase and single-scattering effects."
status: past
period: "2019-2020"
order: 4
featured: false
cover: ../../assets/projects/stochastic-volume-rendering.jpg
coverAlt: "Three renderings of a turbine flow showing surface shading, particle sampling, and single scattering"
coverCaption: >-
  We visualize an SPH dataset of fluid rotating a turbine using volume rendering with surface shading (left). The dataset contains 86 million particles that are evaluated on the fly without significant preprocessing. Stochastic particle sampling substantially improves render times (center), allowing us to include single scattering during volume rendering (right).
badges: ["scientific visualization", "SPH", "rendering", "sampling"]
links:
  - label: "Official version"
    href: "https://doi.org/10.1111/cgf.14121"
  - label: "Open access PDF"
    href: "https://cg.ivd.kit.edu/publications/2020/stochastic_sph/cgf14121.pdf"
  - label: "Video"
    href: "https://cg.ivd.kit.edu/publications/2020/stochastic_sph/cgf14121-video.mp4"
  - label: "Code"
    href: "https://cg.ivd.kit.edu/publications/2020/stochastic_sph/cgf14121-code.zip"
---

This project started with Max Piochowiak's master's thesis, which I supervised.

Max Piochowiak, Tobias Rapp, Carsten Dachsbacher

Published in Computer Graphics Forum, 2020.

[Paper (Open Access)](https://cg.ivd.kit.edu/publications/2020/stochastic_sph/cgf14121.pdf)
| [Video](https://cg.ivd.kit.edu/publications/2020/stochastic_sph/cgf14121-video.mp4)
| [Code](https://cg.ivd.kit.edu/publications/2020/stochastic_sph/cgf14121-code.zip)


## Abstract

In this paper, we present a novel method for the direct volume rendering of large smoothed-particle hydrodynamics (SPH) simulation data without transforming the unstructured data to an intermediate representation. By directly visualizing the unstructured particle data, we avoid long preprocessing times and large storage requirements. This enables the visualization of large, time-dependent, and multivariate data both as a post-process and in situ. To address the computational complexity, we introduce stochastic volume rendering that considers only a subset of particles at each step during ray marching. The sample probabilities for selecting this subset at each step are thereby determined both in a view-dependent manner and based on the spatial complexity of the data. Our stochastic volume rendering enables us to scale continuously from a fast, interactive preview to a more accurate volume rendering at higher cost. Lastly, we discuss the visualization of free-surface and multi-phase flows by including a multi-material model with volumetric and surface shading into the stochastic volume rendering.
