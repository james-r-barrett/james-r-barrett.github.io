---
title: "Pyrenoid enrichment protocol"
collection: protocols
permalink: /protocols/2024-06-28-pyrenoid_isolation
date: 2024-06-28
---

Protocol for the enrichment of pyrenoids from green algae. Used for the isolation of pyrenoid enriched fractions from *Chlorella sorokiniana* in a recent <a href="https://www.nature.com/articles/s41477-024-01812-x">Mackinder lab contribution</a>.

last updated: 28/06/24

## Before starting

### Materials
*Essential
- *Formaldehyde 37% (w/v) solution in H<sub>2</sub>O (<a href="https://www.sigmaaldrich.com/GB/en/product/sial/252549">*e.g.*</a>)
- *100% Percoll solution (<a href="https://www.cytivalifesciences.com/en/us/shop/cell-therapy/media/percoll-density-gradient-media-p-05823">*e.g.*</a>) 
- Sonicator and probe

### Notes
This protocol serves to enrich partially fixed pyrenoid fractions from green algal systems, but was optimised in *Chlorella sorokiniana*. The protocol was adapted from a starch isolation protocol and therefore equally enriches 'free' starch plates. Preliminary mass spectrometry experiments indicate that ribosomes are also enriched by this protocol.


## Protocol
### Partial fixation of cells

1. Grow cells to mid-exponential phase (2-10x10<sup>6</sup> cells mL<sup>-1</sup>).
   1. Most studied pyrenoids are induced under ambient, or lower, CO<sub>2</sub> concentrations (<400 ppm) in minimal media (*e.g.* TP, HSM, ASW)
1. Harvest cells by centrifugation (1500 *g*, 5 minutes, RT) and resuspend to 1 mL in 30 mM HEPES-KOH (pH 8.0).
   1. Depending on the downstream intention (*e.g.* mass spectrometry/immunofluorescence/western blot), the number of cells used can be altered. For reference, 5x10<sup>9</sup> cells mL<sup>-1</sup> *Chlorella* cells is sufficient for several immunofluorescence experiments in addition to western blotting and mass spectrometry studies.
1. Pellet cells again and resuspend to 1 mL in 30 mM HEPES-KOH (pH 8.0) + 1% w/v Formaldehyde in a 1.5 mL eppendorf tube.
1. Incubate with mixing at room temperature for 20 minutes.
   1. Extending the incubation period or increasing the Formaldehyde % was anecdotally found to increase the *in vivo* cross-linking but risks contaminating pyrenoid fractions with large cellular aggregates if extended too far.
1. Quench the fixing reaction by adding 1 mL of 2M Tris-HCl (pH 8.0) to a final concentration of 1M. 
1. Wash the fixed cells twice by pelleting and resuspending in pyrenoid enrichment buffer (50 mM Tris-HCl, 0.2 mM EDTA, 0.5% (w/v) Triton X-100, pH 8.0). After the second wash, resuspend to a final volume of 1 mL in pyrenoid enrichment buffer.

### Pyrenoid enrichment

1. Lyse the partially fixed cells by sonication.
   1. Lysis by sonication is very dependent on the specific setup and use case and requires optimisation. In general, smaller volumes are lysed more efficiently. For reference, our setup is as below:
      1. The 1 mL sample is sonciated in a 5 mL eppendorf (<a href="https://www.eppendorf.com/gb-en/Products/Laboratory-Consumables/Tubes/EppendorfTubes-50mL-p-0030119401">*e.g.*</a>).
      1. A 1/16" diameter sonication probe was used (*e.g.* <a href="https://www.coleparmer.co.uk/i/qsonica-418-ultrasonic-cell-disruptor-microtip-probes-1-16-dia/0471189">Qsonica 418 #4417</a>).
      1. A Misonix S-4000 sonicator (discontinued and replaced by the<a href="https://www.sonicator.com/products/q500-sonicator"> Q500</a>) was operated at 30% amplitude with pulses of 3 seconds, with 6 seconds cooling between, for a total processing time of 3 minutes.
1. Enrich the pyrenoid fractions by centrifugation (2500 *g*, 20 minutes, RT).
1. Wash the pelleted pyrenoid enriched fraction in 1 mL of pyrenoid enrichment buffer and resuspend to 1 mL in pyrenoid enrichment buffer.
1. Load the 1 mL crude pyrenoid fraction onto a 9 mL cushion of 100% Percoll in a 15 mL falcon tube and centrifuge at 2500 *g* for 15 minutes at RT to pellet the pyrenoid-enriched fraction.
1. Wash the pelleted, pyrenoid enriched fraction once in 1 mL of pyrenoid enrichment buffer, harvest by centrifugation (20,000 *g*, 1 minute, RT) and resuspend to the desired volume in 50 mM Tris-HCl, 50 mM NaCl, pH 8.0.

### Immunofluorescence of pyrenoid enriched fractions

1. Resuspend pelleted pyrenoid enriched fractions in 100 &#181;L of 1% BSA (w/v) Tris-buffered saline with Tween (TBST) containing the primary antibody.
   1. For reference, we have successfully probed using 1:50 and 1:250 dilutions.
1. Incubate the pyrenoid solution overnight with mixing at 4 &deg;C.
1. Wash the fraction twice in 1 mL of TBST.
1. Resuspend in 100 &#181;L of 1% BSA (w/v) TBST containing a 1:1000 dilution of the fluorescent secondary antibody (anti-rabbit; <a href="https://www.thermofisher.com/antibody/product/Goat-anti-Rabbit-IgG-H-L-Cross-Adsorbed-Secondary-Antibody-Polyclonal/A-11008">A-11008, Sigma-Aldrich</a>, anti-mouse; <a href="https://www.sigmaaldrich.com/GB/en/product/sigma/t6074">T6074, Sigma-Aldrich</a>) and incubate at RT for 1 hour at 4 &deg;C.
1. Wash the fraction twice and image by fluorescent microscopy.
