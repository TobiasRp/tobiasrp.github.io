---
layout: post
title: Void-and-Cluster Sampling of Large Scattered Data and Trajectories
tags: scientific visualization, sampling
---

Data reduction and effective visualization using a novel GPU accelerated stratified sampling strategy.

Tobias Rapp, Christoph Peters, and Carsten Dachsbacher

Accepted and presented at IEEE VIS 2019, published in IEEE Transactions on Visualization and Computer Graphics 2020.

[Official version](https://doi.org/10.1109/TVCG.2019.2934335)


### Abstract

We propose a data reduction technique for scattered data based on statistical sampling. Our void-and-cluster sampling technique finds a representative subset that is optimally distributed in the spatial domain with respect to the blue noise property. In addition, it can adapt to a given density function, which we use to sample regions of high complexity in the multivariate value domain more densely. Moreover, our sampling technique implicitly defines an ordering on the samples that enables progressive data loading and a continuous level-of-detail representation. We extend our technique to sample time-dependent trajectories, for example pathlines in a time interval, using an efficient and iterative approach. Furthermore, we introduce a local and continuous error measure to quantify how well a set of samples represents the original dataset. We apply this error measure during sampling to guide the number of samples that are taken. Finally, we use this error measure and other quantities to evaluate the quality, performance, and scalability of our algorithm.

### Teaser

![Dark sky](/images/DarkSky.png)

_We propose a sampling technique for data reduction to reduce e.g. large cosmological simulations of dark matter._

### Downloads

[Author's version](https://cg.ivd.kit.edu/publications/2019/void_and_cluster/preprint.pdf)
| [Supplementary document](https://cg.ivd.kit.edu/publications/2019/void_and_cluster/suppl.pdf)
| [Video](https://cg.ivd.kit.edu/publications/2019/void_and_cluster/video.mp4)


