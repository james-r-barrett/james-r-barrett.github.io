---
title: "Golden gate assembly protocol"
collection: protocols
permalink: /protocols/2025-07-03-golden_gate
date: 2025-07-03
---

Protocol for golden gate assembly.

Most of the time these inefficiencies are due to the degradation of ATP/DTT in the 10x  ligase buffer used for the reaction, meaning the T4 DNA ligase cannot function properly. To overcome this, we've previously been aliquoting the ligase buffer and recommending that the same aliquot not be thawed and used >10 times. As before we have replenished the fresh aliquots of the buffer in a new box in the drawer with the enzymes in the freezer. Please remember to thaw these aliquots on ice, keep them for yourself, and freeze as soon as possible after use.

As an alternative that I hope will combat the ATP degradation, I have also made up a 2-part homemade T4 DNA ligase buffer in which the DTT/ATP are kept separate from the Tris/MgCl2 (ATP degrades faster in the presence of MgCl2). These two parts are both 10x stocks, so 1 uL of each should be used in 10 uL reaction. These are also in the same box and labelled 'home ligase buffer P1' and 'home ligase buffer P2' respectively. As the P2 buffer contains ATP and DTT, it should also be thawed on ice and kept cold, but should be substantially more stable than the 10x mix. For those interested the buffer compositions are below:

## Recipes for parts
**Part 1**
500 mM Tris-HCl
100 mM MgCl2
Adjusted to pH 7.5

**Part 2**
10 mM ATP
100 mM DTT

When mixed, these give the final 1x buffer composition (same as the standard NEB T4 DNA ligase buffer):
50 mM Tris-HCl
10 mM MgCl2
1 mM ATP
10 mM DTT
pH 7.5


## Reaction mix
Another source of error in the reactions is the pipettability of the T4 DNA ligase enzyme. To combat this, we are trialling diluting the T4 DNA ligase enzyme 2-fold with T4 DNA ligase storage buffer (making it 200,000 units / mL). I have only done this to the aliquot with the black dot on the lid in the freezer box.

Taken together, these modifications mean your 10 uL reactions should contain:

Option A (with 10x NEB T4 DNA ligase buffer)
1 uL 10x NEB T4 DNA ligase buffer
0.5 uL restriction enzyme (BsaI, BpiI, BspQI, BsmBI)
0.5 uL diluted T4 DNA ligase enzyme
25 fmol backbone (usually ~50 ng)
50-100 fmol inserts (usually ~10-100 ng)

Option B (with 2-part homemade 10x ligase buffers)
1 uL 10x home ligase buffer part 1
1 uL 10x home ligase buffer part 2
0.5 uL restriction enzyme (BsaI, BpiI, BspQI, BsmBI)
0.5 uL diluted T4 DNA ligase enzyme
25 fmol backbone (usually ~50 ng)
50-100 fmol inserts (usually ~10-100 ng)

## Assembly conditions
For cycling conditions I'm a fan of overnight assemblies:
40 cycles of:
37 degrees (10 minutes)
16 degrees (10 minutes)
Then:
37 degrees (10 minutes)
65 degrees (20 minutes).

Alternatively, same-day assemblies (~4 hours):
15 cycles of:
37 degrees (5 minutes)
16 degrees (5 minutes)
Then:
37 degrees (10 minutes)
65 degrees (20 minutes).

## Plating
I then plate transform 4 uL and plate the whole mix.

