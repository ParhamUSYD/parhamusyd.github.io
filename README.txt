Portfolio website update — case-study structure ready
======================================================

What is included
----------------
- index.html
- style.css
- script.js
- projects/housing-stress.html
- assets/pdf/Parham_Vatankhah_CV_Master_Website.pdf
- assets/images/projects/housing-stress/README_figures.txt

Why this structure is better
----------------------------
The homepage now stays clean and premium-looking, while the housing project lives on its own dedicated case-study page.
That is the stronger portfolio pattern because it:
- keeps the homepage elegant
- shows depth when someone clicks into the project
- makes the work look more intentional and professional

Figure folder
-------------
Put the seven chart PNG files in this exact folder:

assets/images/projects/housing-stress/

Use these exact filenames:
- fig01_top15_lgas_clean.png
- fig02_income_share_top10_clean.png
- fig03_tenure_totals_clean.png
- fig04_selected_lga_tenure_clean.png
- fig05_cumulative_share_lgas.png
- fig06_vulnerability_scatter.png
- fig07_income_composition_stacked.png

Important
---------
The site is already wired to these exact filenames.
If the file exists, the chart will appear automatically.
If the file does not exist yet, a clean placeholder is shown instead of a broken image.

Recommended final website structure
-----------------------------------
/
├── index.html
├── style.css
├── script.js
├── projects/
│   └── housing-stress.html
└── assets/
    ├── pdf/
    │   └── Parham_Vatankhah_CV_Master_Website.pdf
    └── images/
        └── projects/
            └── housing-stress/
                ├── fig01_top15_lgas_clean.png
                ├── fig02_income_share_top10_clean.png
                ├── fig03_tenure_totals_clean.png
                ├── fig04_selected_lga_tenure_clean.png
                ├── fig05_cumulative_share_lgas.png
                ├── fig06_vulnerability_scatter.png
                └── fig07_income_composition_stacked.png

Deployment note
---------------
If you are replacing your current repository files, keep the folder names exactly the same.
Because all links are relative, this structure works cleanly on GitHub Pages and on a custom domain.

My recommendation
-----------------
Upload the seven exported PNG files next and then test the site locally or on GitHub Pages.
Once the real figures are in place, the project will look much more complete and much more persuasive.
