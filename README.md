# E-commerce Product Info Extractor

## Overview
This Chrome plugin extracts product information (name, price, image) from e-commerce fashion websites like Zara and H&M.

## Installation
1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the directory containing the plugin files.

## Usage
1. Navigate to a product page on Zara or H&M.
2. Click on the plugin icon to view the extracted product information.

## Notes
- The CSS selectors in `content.js` need to be updated to match the actual website structure.

### Summary
- **Manifest File**: Defines the Chrome extension settings.
- **Content Script (content.js)**: Extracts product details from the current page.
- **Popup Script (popup.js)**: Displays the extracted data in the popup UI.
- **Background Script (background.js)**: Handles any background functionality.
- **Styling (styles.css)**: Provides basic styling to make the popup presentable.