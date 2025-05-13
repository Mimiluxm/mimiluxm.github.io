function filterProducts(categoryKey) {
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const productCategory = product.getAttribute('data-category');

    if (categoryKey === 'all' || productCategory === categoryKey) {
      product.style.display = '';
    } else {
      product.style.display = 'none';
    }
  });
}