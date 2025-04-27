function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
      const title = product.querySelector('h3').innerText;
      
      if (category === 'all' || title.includes(category)) {
        product.style.display = '';
      } else {
        product.style.display = 'none';
      }
    });
  }