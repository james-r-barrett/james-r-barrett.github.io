---
title: "Linker purification protocol"
collection: protocols
permalink: /protocols/2025-01-10-linker_purification
date: 2025-01-10
---

Protocol for the soluble purification of linker proteins.

last updated: 10/01/2025

## Before starting

### Requirements
- IPTG
- Imidazole
- Refrigerated FPLC
- HisTrap column (*e.g.* <a href="https://www.cytivalifesciences.com/en/us/shop/chromatography/prepacked-columns/affinity-tagged-protein/histrap-ff-crude-histidine-tagged-protein-purification-columns-p-00407">Cytiva #17528601</a>)
- Superdex 75 gel filtration column (*e.g.* <a href="https://www.cytivalifesciences.com/en/us/shop/chromatography/prepacked-columns/size-exclusion/superdex-75-10-300-gl-and-5-150-gl-p-05899">Cytiva #17517401</a>)
- TEV protease (produced from _e.g._ <a href="https://www.addgene.org/8827/">pRK793</a>)
- Protein concentration columns (_e.g._<a href="https://www.merckmillipore.com/GB/en/product/Amicon-Ultra-15-Centrifugal-Filter-Units,MM_NF-C7715"> Amicon® Ultra-15</a>)

## Buffers
**Lysis buffer**
- 50 mM Tris-HCl
- 500 mM NaCl
- 25 mM Imidazole
- Adjust to pH 8.0

**Elution buffer**
- 50 mM Tris-HCl
- 500 mM NaCl
- 500 mM Imidazole
- Adjust to pH 8.0

**Gel filtration buffer**
- 50 mM Tris-HCl
- 500 mM NaCl
- Adjust to pH 8.0

### Essential note
The integrity of the final product is largely dependent on keeping the material as **_cold as possible at all times_**. If possible, complete purification steps in a cold room or otherwise ensure the solution and column temperatures do not surpass 10 &deg;C. For very high quality preparations, pre-cooling plasticware (e.g. centrifuge tubes, falcons and collection blocks) is important. Protease inhibitors (_e.g._ PMSF/ Inhibitor cocktails) will not prevent the degradation of the linker protein at warmer temperatures, which we assume is due to the thermodynamic movement of the protein in solution that acts to tear it apart. Keeping the linker in high salt conditions (_i.e_ 300+ mM NaCl) will prevent most linker proteins from interacting with column resin material and may also prevent self-association of the linker proteins. The typical yield from 1 L of culture is ~10 mg of highly pure linker protein.

## Transformation and Expression Protocol
### Transformation
#### Note 1
We have rarely struggled to express linker sequences in all manner of expression strains, using both optimised and non-optimised sequences. Our standard is to use BL21(de3), but we have also used C41(de3), BL21(de3) pRIL and BL21 Gold. By preference, we complete fresh transformations of the plasmid stock into the expression strain each time we complete expressions, but this is not essential.

1. Thaw 50 &#181;L aliquot of BL21 (de3) cells on ice, ensuring the entirety of the solution is at the bottom of the tube.
1. Pipette 10-100 ng of plasmid  into the cells and mix by swirling of flicking (do not aspirate).
1. Incubate on ice for 15-30 minutes.
1. Heat-shock the cells by dipping the tube in 42 &deg;C water for 30 seconds.
1. Recover on ice for 5 minutes.
1. Add 600 &#181;L of SOC/LB to the cells and recover with shaking at 37 &deg;C for 45-90 minutes.
1. Plate 100 &#181;L of the outgrowth on LB selection plates and recover at 37 &deg;C overnight (or 30 &deg;C over the weekend) until single colonies are formed.

### Expression
#### Note 2
We have used both short and long expression windows for linker constructs and noticed no difference in product integrity in doing so. Anecdotally, longer expression times at lower temperatures increase the expression yield, though shorter expression are sometimes more convenient.

1. Inoculate colony from transformation plate into 5-50 mL of LB + antibiotic (carbenicillin for MBP-GFP constructs) and grow overnight at 37 &deg;C with shaking.
1. Dilute pre-culture 1:100 in LB + antibiotic and grow at 37 &deg;C with shaking until OD<sub>600</sub> is 0.3-0.8.
1. Induce expression of the protein with 1 mM IPTG.
    1. For short expression windows, keep the temperature at 37 &deg;C and express for 2-3 hours.
   1.   For longer expression windows, reduce the temperature to 20 &deg;C and express for 12-24 hours.
1. Pellet the cells by centrifugation at 5,000 _g_ for 10 minutes.
   1. The pelleted cells can either be used immediately or stored at -20 &deg;C until ready for use.
   1. If using the GFP-MBP expression construct, the pellet should be bright green.

## Purification Protocol
### Lysing material
#### Note 3
Lysis methodology is not vital to the success of the protocol, but maintaining low solution temperatures, as always, is critical to the integrity of the product. If possible, avoid lysis steps that are not completed at low temperatures (_e.g._ non-cooled french press or freeze-thaw lysis). We find it most convenient to complete sonication on ice, with cooling periods between pulses.

1. Dissolve the cell pellet in lysis buffer (50 mM Tris-HCl, 500 mM NaCl, 25 mM Imidazole, adjusted to pH 8.0) by aspirating with a stripette or stirring on ice.
   1. Ensure the solution is kept on ice at all times.
   1. We usually resuspend in 25-50 mL of lysis buffer for each 1 L of expression culture pelleted.
1. Immediately prior to lysis, add PMSF to a final concentration of 2 mM (100x dilution from stock).
   1. Ensure that PMSF is fully redissolved after storage, as it precipitates at low temperatures in isopropanol. 
   1. PMSF is unstable in aqueous solutions, so minimising the time between addition and lysis is important.
1. Lyse the cells by sonication in a 50 mL falcon tube, using 3-4 minutes of processing time, 3 second pulses, with 10 second breaks between pulses.
   1. Sonication power is dependent on the system used, the age of the probe and volume/viscosity of the solution used.
   1. At York, we use and ampltiude of 30-50 and a A 1/16" diameter sonication probe (*e.g.* <a href="https://www.coleparmer.co.uk/i/qsonica-418-ultrasonic-cell-disruptor-microtip-probes-1-16-dia/0471189">Qsonica 418 #4417</a>)
1. Remove unlysed cells and cellular debris by centrifugation at ~50,000 _g_ for 30 minutes at 1-4 &deg;C.
   1. Pre-cooling the centrifuge, rotor and centrifuge tubes helps to maintain a low solution temperature here.
1. Filter the soluble protein in the supernatant fraction using a 0.2 &#181;m syringe filter.
   1. Again, pre-cooling the syringe used for the filtration helps.
   1. Make sure to wear eye-protection when filtering solutions with high force.

### Nickel affinity purification 1
#### Note 4
We use a refrigerated Äkta Go for all linker purifications, which maintains an internal temperature of ~7-11 &deg;C. We have also previously used a non-refrigerated system, with cooled buffers, an ice-cooled column and cooled collection blocks but the integrity of the final product was also noticeably reduced. We have not explored the use of gravity columns, but this could be an easier approach to maintain low temperatures, with the drawbacks of having to completed batch elution.

1. Equilibrate line A, the sample load line and the HisTrap column with lysis buffer, and line B with elution buffer (50 mM Tris-HCl, 500 mM NaCl, 500 mM Imidazole, adjusted to pH 8.0).
   1. We use 5 mL HisTrap FF crude 5 mL columns (*e.g.* <a href="https://www.cytivalifesciences.com/en/us/shop/chromatography/prepacked-columns/affinity-tagged-protein/histrap-ff-crude-histidine-tagged-protein-purification-columns-p-00407">Cytiva #17528601</a>).
1. Load the filtered supernatant onto the column at 5 mL min<sup>-1</sup> using the sample line.
   1. If using the GFP-MBP expression construct, the column should turn bright green and the flow-through should be much less green than the input solution.
1. Wash the column back to low UV (<20 mAU) using the lysis buffer at 5 mL min<sup>-1</sup>.
   1. Usually ~20 CVs (100 mL)
1. Use a linear gradient from 0-100% elution buffer over 20 minutes at 5 mL min<sup>-1</sup> to elute the protein.
   1. Most linker proteins will start eluting at ~10% (~75 mM Imidazole) and finish eluting by ~60% (~300 mM Imidazole).
   1. If the product is well intact, the protein should elute as a single peak.
1. Analyse the elution peak by SDS-PAGE of the fractions and pool fractions containing the intact linker protein fusion.

### Overnight TEV cleavage
#### Note 5
We produce TEV protease in-house from <a href="https://www.addgene.org/8827/">pRK793</a> using the recommended protocol.

1. Add TEV protease to ~1:50 molar ratio and mix by inversion then incubate on ice overnight.
   1. Other groups have anecdotally reported using room temperature incubation for 1 hour to achieve the same outcome.
   2. In practice, we don't calculate the amount of TEV to add, and estimate whether to add 1 or 2 1 mg aliquots, as the TEV protease is His-tagged and removed in the reverse IMAC.

### Buffer exchange
#### **Essential note**
For unexplained reasons, completing dialysis and TEV cleavage at the same time does not work. We have not determined why this is. For that reason, we choose to complete overnight cleavage, then buffer exchange by concentration and dilution the next day instead.

1. Concentrate the cleaved protein solution to ~10% of its original volume in 10,000 MWCO concentrating columns (<a href="https://www.merckmillipore.com/GB/en/product/Amicon-Ultra-15-Centrifugal-Filter-Units,MM_NF-C7715">_e.g._; Amicon® Ultra-15</a>)
1. Dilute the solution back to the original volume using gel filtration buffer (50 mM Tris-HCl, 500 mM NaCl, adjusted to pH 8.0).
   1. This should reduce the Imidazole concentration back to ~25 mM, to allow binding of the His-tagged solubility tags in the reverse IMAC.


### Reverese IMAC (Nickel affinity purification 2)
#### Note 6
To remove the cleaved solubility tags, TEV protease and any partial/uncleaved protein, we pass the solution back over a clean HisTrap column.

1. Use the same procedure as in Nickel affinity purification 1 to equilibrate the system.
1. Pass the buffer-exchanged protein solution over the HisTrap column, ensuring to **collect the flow-through** which contains the untagged, cleaved linker protein.
   1. Often the peak of the flow-through will be strangely shaped due to hydrodynamic effects on the column, but should roughly correspond to the volume loaded at this point.
1. Pool the flow-through fractions and concentrate using 10,000 MWCO concentrating columns (<a href="https://www.merckmillipore.com/GB/en/product/Amicon-Ultra-15-Centrifugal-Filter-Units,MM_NF-C7715">_e.g._; Amicon® Ultra-15</a>).

### Gel Filtration
#### Note 7
At this stage the protein should already be very clean and gel filtration should only be used as a polishing step. If your protein is heavily contaminated or degraded, gel filtration will not do much to clean up the preparation. For our gel filtration steps, we use 10/300 GL columns as they are conveniently low volume and provide high resolution separation of small sample volumes (<500 &#181;L). In most cases a Superdex 75 resin is appropriate, but for larger linker constructs Superdex 200 resin may be required.

1. Equilibrate your column with gel filtration buffer (50 mM Tris-HCl, 500 mM NaCl, 5% glycerol).
1. Load the concentrated sample using an injection loop.
1. Collect fractions across the elution.
   1. For 10/300 GL columns we find it appropriate to collect 250 &#181;L fractions. With a 500 &#181;L load, the elution peak should be ~1.5-2.5 mL.
1. Analyse the elution fractions by SDS-PAGE and concentrate using 10,000 MWCO spin columns.
1. Add glycerol to 5% (v/v) before snap-freezing in liquid nitrogen and storing at -80 &deg;C.