(() => {
  const getProductDetails = () => {
    let productName = document.querySelector('#js-product-name > div > h1'); // Updated selector for product name
    let productPrice = document.querySelector('#product-price > div > div > span'); // Updated selector for product price
    let productImage = document.querySelector('.product-detail-main-image-container img'); // Updated selector for product image

    return {
      name: productName ? productName.innerText : 'N/A',
      price: productPrice ? productPrice.innerText : 'N/A',
      imageUrl: productImage ? productImage.src : ''
    };
  };

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getProductDetails') {
      sendResponse(getProductDetails());
    }
  });
})();