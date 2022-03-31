---
layout: post
title: Image-based Visualization of Large Volumetric Data Using Moments
tags: scientific visualization, image-based visualization, volume rendering, moments, MESE, Fourier reconstruction
---

Image-based visualization of large, arbitrarily structured volumetric data.

Tobias Rapp, Christoph Peters, and Carsten Dachsbacher

Accepted and presented at PacificVis 2022, to be published in IEEE Transactions on Visualization and Computer Graphics.


### Abstract

We present a novel image-based representation to interactively visualize large and arbitrarily structured volumetric data. This image-based representation is created from a fixed view and models the scalar densities along each viewing ray. Then, any transfer function can be applied and changed interactively to visualize the data. In detail, we transform the density in each pixel to the Fourier basis and store Fourier coefficients of a bounded signal, i.e.\ bounded trigonometric moments. To keep this image-based representation compact, we adaptively determine the number of moments in each pixel and present a novel coding and quantization strategy. Additionally, we perform spatial and temporal interpolation of our image representation and discuss the visualization of introduced uncertainties. Moreover, we use our representation to add single scattering illumination. Lastly, we achieve accurate results even with changes in the view configuration. We evaluate our approach on two large volume datasets and a time-dependent SPH dataset.

### Downloads

[Author's version](/files/moment_images/preprint.pdf)
| [Video](/files/moment_images/video.mp4)
| [Supplementary document](/files/moment_images/supplemental_document.pdf)
| [Code](https://github.com/TobiasRp/mray)

