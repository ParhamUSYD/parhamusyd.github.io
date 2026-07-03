Parham Vatankhah portfolio website
===================================

This is a lightweight static website for GitHub Pages and the custom domain
parhamvatankhah.com.

Included files
--------------
- index.html
- style.css
- script.js
- projects/housing-stress.html
- assets/pdf/Parham_Vatankhah_CV_Master_Website.pdf
- assets/images/projects/housing-stress/
- robots.txt
- sitemap.xml
- 404.html
- favicon.svg
- site.webmanifest

Website focus
-------------
The homepage positions Parham Vatankhah as a PhD researcher working in
cardiovascular CFD, computational haemodynamics, thoracic aortic flow, Python
automation, Ansys Fluent workflows, and AI for simulation.

Project pages
-------------
The South Australian housing stress project is retained as a completed data
case study. Its seven PNG figures are integrated directly into the page:

- fig01_top15_lgas_clean.png
- fig02_income_share_top10_clean.png
- fig03_tenure_totals_clean.png
- fig04_selected_lga_tenure_clean.png
- fig05_cumulative_share_lgas.png
- fig06_vulnerability_scatter.png
- fig07_income_composition_stacked.png

Preview locally
---------------
From the repository root:

python -m http.server 8000 --bind 127.0.0.1

Then open:

http://127.0.0.1:8000/

Deployment
----------
Push changes to the GitHub Pages branch configured for the repository. Keep the
CNAME file unchanged so the custom domain remains connected.
