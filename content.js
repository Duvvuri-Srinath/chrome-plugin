(() => {
  const getProductDetails = () => {
    let productName = document.querySelector('#js-product-name > div > h1');
    let productPrice = document.querySelector('#product-price > div > div > span'); 
    let productImage = document.querySelector('.product-detail-main-image-container img'); 

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