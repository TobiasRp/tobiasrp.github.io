---
layout: post
title: Uncertain Transport in Unsteady Flows
tags: scientific visualization, stochastic, flows
---

Extracting topological features in uncertain flows, modeled by stochastic differential equations.

Tobias Rapp and Carsten Dachsbacher

Proceedings of the IEEE VIS conference 2020.

[Official version](https://doi.org/10.1109/VIS47514.2020.00010)


### Abstract

We study uncertainty in the dynamics of time-dependent flows by identifying barriers and enhancers to stochastic transport. This topological segmentation is closely related to the theory of Lagrangian coherent structures and is based on a recently introduced quantity, the diffusion barrier strength (DBS). The DBS is defined similar to the finite-time Lyapunov exponent (FTLE), but incorporates diffusion during flow integration. Height ridges of the DBS indicate stochastic transport barriers and enhancers, i.e. material surfaces that are minimally or maximally diffusive. To apply these concepts to real-world data, we represent uncertainty in a flow by a stochastic differential equation that consists of a deterministic and a stochastic component modeled by a Gaussian. With this formulation we identify barriers and enhancers to stochastic transport, without performing expensive Monte Carlo simulation and with a computational complexity comparable to FTLE. In addition, we propose a complementary visualization to convey the absolute scale of uncertainties in the Lagrangian frame of reference. This enables us to study uncertainty in real-world datasets, for example due to small deviations, data reduction, or estimated from multiple ensemble runs.

### Images

![Transport in the Red Sea](/images/dbs.png)

We visualize transport under uncertainties in the Red Sea. The backward diffusion barrier strength (DBS) on the left indicates material surfaces that are maximally diffusive. Since the DBS assumes only small-scale stochastic deviations, we propose a complementary visualization (right) of the absolute scale of uncertainties in the Lagrangian frame.

### Downloads

[Author's version](https://cg.ivd.kit.edu/publications/2020/uncertain_transport/preprint.pdf)
| [Supplementary document](https://cg.ivd.kit.edu/publications/2020/uncertain_transport/supplementary.pdf)
| [Supplementary code](https://cg.ivd.kit.edu/publications/2020/uncertain_transport/supplementary_code.h)
