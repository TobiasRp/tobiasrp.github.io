---
title: "Void-and-Cluster Sampling of Large Scattered Data and Trajectories"
summary: "Blue-noise sampling of large scattered datasets and trajectories for data reduction and progressive visualization."
status: past
period: "2019-2020"
order: 5
featured: false
cover: ../../assets/projects/void-and-clustering.png
coverAlt: "Reduced dark matter cosmology dataset using void-and-cluster sampling"
coverCaption: "The Dark Sky dark-matter dataset reduced to 5% with uniform void-and-cluster sampling."
badges: ["scientific visualization", "sampling"]
links:
  - label: "Official version"
    href: "https://doi.org/10.1109/TVCG.2019.2934335"
  - label: "Author's version"
    href: "https://cg.ivd.kit.edu/publications/2019/void_and_cluster/preprint.pdf"
  - label: "Supplementary document"
    href: "https://cg.ivd.kit.edu/publications/2019/void_and_cluster/suppl.pdf"
  - label: "Video"
    href: "https://cg.ivd.kit.edu/publications/2019/void_and_cluster/video.mp4"
---

Tobias Rapp, Christoph Peters, and Carsten Dachsbacher

Accepted and presented at IEEE VIS 2019, published in IEEE Transactions on Visualization and Computer Graphics 2020.

[Official version](https://doi.org/10.1109/TVCG.2019.2934335)
| [Author's version](https://cg.ivd.kit.edu/publications/2019/void_and_cluster/preprint.pdf)
| [Supplementary document](https://cg.ivd.kit.edu/publications/2019/void_and_cluster/suppl.pdf)
| [Video](https://cg.ivd.kit.edu/publications/2019/void_and_cluster/video.mp4)

## Introduction

Large simulations and measurements produce more scattered data points than is practical to store, transfer, or explore interactively. Keeping a random fraction reduces the data volume, but can leave gaps beside clusters of samples and overlook regions where the measured values vary strongly. We wanted a smaller, representative subset that covers the original data well and can be loaded progressively at different levels of detail.

Our method selects existing points and spreads them out with a blue-noise pattern: samples keep their distance without forming a visible grid. It can also place more samples where the data values are complex. For time-dependent data, we extend the same idea to select trajectories rather than sampling each time step independently.

## Why it works

R. A. Ulichney introduced the [void-and-cluster method for dither array generation](https://doi.org/10.1117/12.152707) in 1993. We extend his method from regular image grids to scattered points with nonuniform spatial density.

At each point, we compare the density of selected samples nearby with the density of *all* input points nearby. Accounting for the original density matters: a sparse part of the dataset should not be mistaken for a gap in the sampling, and denser parts should receive proportionally more samples.

We start with a random subset, then repeatedly move a sample from the tightest cluster to the largest void until removing that sample would make its old position the next largest void. From there, we add new samples at the largest remaining voids until we reach the desired size. This reduces clumps and gaps without imposing a regular grid, and the order of additions gives useful smaller subsets for progressive loading. [Figure 2 in the paper](https://cg.ivd.kit.edu/publications/2019/void_and_cluster/preprint.pdf#page=3) illustrates the swap-and-fill steps.

## Abstract

We propose a data reduction technique for scattered data based on statistical sampling. Our void-and-cluster sampling technique finds a representative subset that is optimally distributed in the spatial domain with respect to the blue noise property. In addition, it can adapt to a given density function, which we use to sample regions of high complexity in the multivariate value domain more densely. Moreover, our sampling technique implicitly defines an ordering on the samples that enables progressive data loading and a continuous level-of-detail representation. We extend our technique to sample time-dependent trajectories, for example pathlines in a time interval, using an efficient and iterative approach. Furthermore, we introduce a local and continuous error measure to quantify how well a set of samples represents the original dataset. We apply this error measure during sampling to guide the number of samples that are taken. Finally, we use this error measure and other quantities to evaluate the quality, performance, and scalability of our algorithm.
