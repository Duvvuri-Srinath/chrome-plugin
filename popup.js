document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'getProductDetails' }, (response) => {
      if (response) {
        document.getElementById('product-name').innerText = `Name: ${response.name}`;
        document.getElementById('product-price').innerText = `Price: ${response.price}`;
        document.getElementById('product-image').src = response.imageUrl;
      } else {
        document.getElementById('product-name').innerText = 'Unable to retrieve product details.';
      }
    });
  });
});