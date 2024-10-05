# E-commerce Product Info Extractor

## Overview
This Chrome plugin extracts product information (name, price, image) from e-commerce fashion websites like H&M. It also integrates with an open API to provide similar product suggestions.

## Installation
1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the directory containing the plugin files.

## Usage
1. Navigate to a product page on H&M.
   Example URL: https://www2.hm.com/en_in/productpage.0970819070.html
2. Click on the plugin icon to view the extracted product information.
3. View similar products suggested by the integrated API.

## Notes
- The CSS selectors in `content.js` need to be updated to match the actual website structure if any other e-commerce platform is used instead of H&M.
- Currently a `dummy api endpoint` that contains product details of mens-shirts is used to `mock the functioning of fetch similar products`. This can be replaced with any other api endpoint as required by the user.
