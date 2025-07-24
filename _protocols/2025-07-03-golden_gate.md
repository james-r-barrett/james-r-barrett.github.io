---
title: "Golden gate assembly protocol"
collection: protocols
permalink: /protocols/2025-07-03-golden_gate
date: 2025-07-03
---

Protocol for golden gate assembly used in the Mackinder lab. Kindly typed up by visiting rotation student Mel Ludwig.

last updated: 24/07/25

Most of the time inefficiencies in golden gate assemblies are due to the degradation of ATP/DTT in the 10x  ligase buffer used for the reaction, meaning the T4 DNA ligase cannot function properly. To overcome this, we've previously tried aliquoting the ligase buffer and recommending that the same aliquot not be thawed and used >10 times.

As an alternative that I hope will combat the ATP degradation, we use a 2-part homemade T4 DNA ligase buffer in which the DTT/ATP are kept separate from the Tris/MgCl2 (ATP degrades faster in the presence of MgCl2). These two parts are both 10x stocks, so 1 uL of each should be used in 10 uL reaction. These are in the same box and labelled 'home ligase buffer P1' and 'home ligase buffer P2' respectively. As the P2 buffer contains ATP and DTT, it should also be thawed on ice and kept cold, but should be substantially more stable than the 10x mix. For those interested the buffer compositions are below:

## Material
- T4 DNA ligase enzyme*
- Ligase buffer
- Type IIS restriction enzyme (_e.g._ BsaI, BpiI, SapI)
- Backbone and insert(s)
- Thermal cycler

*see below, either homemade ligase buffer or a commercial 10x stock.

## Recipes for parts
### Homemade ligase buffer
**Part 1**
- 500 mM Tris-HCl
- 100 mM MgCl<sub>2<sub/>
- Adjusted to pH 7.5

**Part 2**
- 10 mM ATP
- 100 mM DTT

#### Note
When mixed, these give the final 1x buffer composition (same as the standard NEB T4 DNA ligase buffer):
- 50 mM Tris-HCl
- 10 mM MgCl2
- 1 mM ATP
- 10 mM DTT
- pH 7.5

### T4 DNA ligase storage buffer
- 10 mM Tris-HCl
- 50 mM KCl
- 1 mM DTT
- 0.1 mM EDTA
- 50% Glycerol
- pH 7.4

## Reaction mix (10 &#181;L reactions)
#### Note
Another potential source of error is the pipetting of very small volumes of T4 DNA ligase
enzyme. To address this, the enzyme can be diluted 2-fold with T4 DNA ligase storage
buffer (200,000 units/mL), allowing for more accurate pipetting. I have only done this to the aliquot with the **black dot** on the lid in the freezer box.

Taken together, these modifications mean your 10 uL reactions should contain:

**Option A (with 10x NEB T4 DNA ligase buffer)**
- 1 &#181;L 10x NEB T4 DNA ligase buffer
- 0.5 &#181;L restriction enzyme (_e.g._ BsaI, BpiI, BspQI, BsmBI)
- 0.5 &#181;L diluted T4 DNA ligase enzyme
- 25 fmol backbone (usually ~50 ng)
- 50-100 fmol inserts (usually ~10-100 ng)
- Add ultrapure water to a final volume of 10 µl

**Option B (with 2-part homemade 10x ligase buffers)**
- 1 &#181;L 10x home ligase buffer part 1
- 1 &#181;L 10x home ligase buffer part 2
- 0.5 &#181;L restriction enzyme (_e.g._ BsaI, BpiI, BspQI, BsmBI)
- 0.5 &#181;L diluted T4 DNA ligase enzyme
- 25 fmol backbone (usually ~50 ng)
- 50-100 fmol inserts (usually ~10-100 ng)
- Add ultrapure water to a final volume of 10 µl

## Assembly protocol
1. Determine the concentration of the backbone and inserts and calculate the
needed volume for 25 fmol of backbone and 50-100 fmol of inserts <a href="https://nebiocalculator.neb.com/#!/dsdnaamt">NEBioCalculator tool </a>can be used to calculate the mass of DNA)
1. Make preferred reaction Mix, keep everything on ice
1. Assemble in thermal cycler:

**For cycling conditions I'm a fan of overnight assemblies:**
   - 40 cycles of:
     - 37 degrees (10 minutes)
     - 16 degrees (10 minutes)
     - Then:
     - 37 degrees (10 minutes)
     - 65 degrees (20 minutes).

**Alternatively, same-day assemblies (~4 hours):**
   - 15 cycles of:
      - 37 degrees (5 minutes)
      - 16 degrees (5 minutes)
      - Then:
      - 37 degrees (10 minutes)
      - 65 degrees (20 minutes).

## Plating
Transform competent cells with 4 µl of Golden Gate assemblies and plate them
on a suitable selective medium.



