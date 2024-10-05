document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'getProductDetails' }, (response) => {
      if (response) {
        document.getElementById('product-name').innerText = `Name: ${response.name}`;
        document.getElementById('product-price').innerText = `Price: ${response.price}`;
        document.getElementById('product-image').src = response.imageUrl;

        // Call DummyJSON API to find similar products
        fetch('https://dummyjson.com/products/category/mens-shirts')
          .then(res => res.json())
          .then(data => {
            const similarProductsList = document.getElementById('similar-products-list');
            similarProductsList.innerHTML = '';

            if (data && data.products && data.products.length > 0) {
              data.products.slice(0, 5).forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'similar-product';
                productDiv.innerHTML = `
                  <p class="similar-product-name">${product.title}</p>
                  <p class="similar-product-price">Price: $${product.price}</p>
                  <img src="${product.thumbnail}" alt="${product.title}">
                `;
                similarProductsList.appendChild(productDiv);
              });
            } else {
              similarProductsList.innerText = 'No similar products found.';
            }
          })
          .catch(error => {
            console.error('Error fetching similar products:', error);
            document.getElementById('similar-products-list').innerText = 'Unable to load similar products.';
          });
      } else {
        document.getElementById('product-name').innerText = 'Unable to retrieve product details.';
      }
    });
  });
});
