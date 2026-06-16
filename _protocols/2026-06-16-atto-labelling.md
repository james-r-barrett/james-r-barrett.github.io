---
title: "Atto NHS ester protein labelling"
collection: protocols
permalink: /protocols/2026-06-16-atto-labelling
date: 2026-06-16
---

Protocol for fluorescent labelling of purified proteins using Atto NHS ester dyes. This protocol has been used successfully for a range of proteins at concentrations down to ~0.4 mg mL<sup>-1</sup>. The addition of bicarbonate immediately prior to labelling improves reaction efficiency by increasing the pH into the optimal range for NHS ester chemistry.

last updated: 16/06/26

## Before starting

### Materials

*Essential*
- Protein sample
- Atto NHS ester dye (e.g. [08741-1MG-F](https://www.sigmaaldrich.com/GB/en/product/sigma/08741?srsltid=AfmBOor3VwZx9vGZVCImQVH5MU267lE5JKFa7qkEVWOi61EDvSq2d7bV))
- Sodium bicarbonate (NaHCO<sub>3</sub>)
- Analytical size exclusion chromatography (SEC) column (e.g. [Superdex 200 Increase 10/300 GL](https://www.sigmaaldrich.com/GB/en/product/sigma/ge28990944?srsltid=AfmBOormXs3PL8Oplm8xH4BD6q5fxPnjk4ZtNotlNia9UWWIYp7_Ps4x)) or desalting column for removal of free dye

### Buffers

**Protein buffer**
- Example:
  - 20 mM HEPES
  - 50 mM NaCl
  - pH 8.0

This protocol has also been applied to proteins in higher salt concentrations.

**Bicarbonate stock**
- 1 M sodium bicarbonate

**Quench solution (optional)**
- 1 M Tris-HCl, pH 8.0

## Essential notes

### Note 1
NHS ester dyes are susceptible to hydrolysis in aqueous solution. Once dissolved, dyes should be added to protein samples immediately. It is not possible to store dye solutions for extended periods of time (> a few hours).

### Note 2
Labelling efficiency is strongly influenced by pH and protein concentrations. NHS ester reactions typically perform best between pH 8.3 and 8.5. The bicarbonate addition used in this protocol shifts the reaction conditions towards this optimal range. Alternatively, if your protein is happy, you can buffer exchange to a bicarbonate buffer system prior to labelling. **Perhaps most importantly, labelling is strongly enhanced at increased protein concentrations. Aim for >2 mg mL<sup>-1</sup>.**

### Note 3
At low protein concentrations (<1 mg mL<sup>-1</sup>) protein adsorption to plastic surfaces can become significant. Where possible, use low-binding tubes and minimise sample transfers.

## Protocol

### Preparation of dye stock
#### Note 4 
Contrary to manufacturer instructions, we prefer to keep dye lyophilised and only resuspend in aqueous buffer prior to labelling. If you resuspend the full dye aliquot in DMSO, it will not be stable for long periods of time.

1. Using a P200 pipette tip, take a small amount of lyophilised dye (enough that it is visible in the lower section of the P200) and resuspend in aqueous buffer that matches your protein (e.g. 20 mM HEPES, 50 mM NaCl, pH 8.0).
1. Centrifuge at ~20,000 _g_ for 1 minute to remove undissolved dye.
1. Immediately proceed to labelling.

### Protein labelling

1. Aliquot protein into microcentrifuge tubes.
1. Add 10 &micro;L of 1 M sodium bicarbonate (pH 8.5–8.6) to each sample.
1. Add 10 &micro;L of freshly prepared dye solution.
1. Mix gently by pipetting.
1. Incubate for 30 minutes at room temperature, protected from light.
   1. We use a benchtop microcentrifuge tube shaking incubator (1200 rpm, RT) for this step.

#### Note 5
For experiments involving multiple samples, it is recommended that dye is added to all samples over as short a time window as practical, and that the dye is added from a common stock to all, such that the amount of dye in each is normalised. Where highly consistent degrees of labelling are required, samples can be quenched after the incubation period using Tris-HCl before downstream processing.

###  Quenching

1. Add sufficient 2 M Tris-HCl (pH 8.0) to give a final concentration of approximately 20–50 mM.
1. Mix gently.
1. Proceed immediately to removal of free dye.

#### Note 5
Quenching is generally recommended when processing many samples in parallel or when there may be a delay before SEC purification. Alternatively the reaction can be quenched by immediate injection to a SEC or desalting column equilibrated in Tris buffer.

### Removal of free dye

1. Load labelled protein onto a pre-equilibrated SEC or desalting column.
1. Elute protein using the desired storage buffer.
1. Collect fluorescent protein fractions.
1. Determine protein concentration and degree of labelling as required.

#### Note 6
For 488- or 594-labelled samples you should observe clear separation between the labelled protein [blue for 594] and free dye [pink for 594] on the column. For 425 or other blue dyes, the labelled protein and free dye will be much more difficult to distinguish by eye.

### Quantifying labelling efficiency

### Procedure

1. Blank the spectrophotometer (nanodrop) using the same buffer as the protein sample.
2. Record a UV-vis absorbance spectrum from 240–900 nm.
3. Record the absorbance values at (e.g.):
   - **280 nm (A280)** – protein and dye absorbance
   - **500 nm (A500)** – Atto488 absorbance maximum

### Calculations (example for Atto488)
#### 1. Correct the Protein Absorbance

Atto488 contributes to the absorbance at 280 nm and must be corrected for:

$$A_{280,\mathrm{corr}} = A_{280} - (A_{501} \times CF_{280})$$

where:

* $$CF_{280}$$ = correction factor for Atto488 at 280 nm (typically 0.09)

#### 2. Calculate Protein Concentration

Calculate the molar protein concentration using the protein extinction coefficient at 280 nm:

$$[\mathrm{Protein}] = \frac{A_{280,\mathrm{corr}}}{\varepsilon_{\mathrm{protein}} \times l}$$

where:

* $$\varepsilon_{\mathrm{protein}}$$ = protein extinction coefficient ($M^{-1} cm^{-1}$)
* $$l$$ = path length (cm)

#### 3. Calculate Dye Concentration

Using the Atto488 molar extinction coefficient:

$$[\mathrm{Atto488}] = \frac{A_{501}}{\varepsilon_{501} \times l}$$

where:

* $$\varepsilon_{501}$$ = 90,000 $M^{-1} cm^{-1}$

#### 4. Calculate Degree of Labelling (DOL)

The degree of labelling represents the average number of dye molecules attached per protein molecule:

$$\mathrm{DOL} = \frac{[\mathrm{Atto488}]}{[\mathrm{Protein}]}$$
### Notes

- Ensure all free dye has been removed prior to measurement (e.g., by desalting column or size-exclusion chromatography).
- Use the extinction coefficient calculated from the protein sequence (e.g., using ProtParam) for accurate concentration determination.
- Typical DOL values between 1 and 3 are suitable for most fluorescence-based assays, although the optimal labelling density depends on the application.

## Troubleshooting

| Observation | Possible cause                                                        |
|------------|-----------------------------------------------------------------------|
| Weak fluorescence signal | Insufficient dye excess, low protein concentration, or dye hydrolysis |
| Variable labelling between samples | Differences in reaction timing/concentration between samples          |
| High free dye background | Incomplete SEC separation                                             |
| Low protein recovery | Protein adsorption to plastic surfaces or column losses               |

## Expected outcome

Following SEC purification, labelled protein should be recovered free of excess dye and suitable for fluorescence microscopy, phase separation assays, binding experiments, or other downstream applications. Labelling efficiency will vary depending on protein concentration, lysine accessibility, and dye-to-protein ratio.