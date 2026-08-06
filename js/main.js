const productList = document.querySelector('#productList');
const categorySelect = document.querySelector('#categorySelect');
const searchInput = document.querySelector('#searchInput');
let products = [];

async function loadProducts() {
  try {
    const response = await fetch('data/products.json');
    products = await response.json();
    renderCategoryOptions();
    renderProducts(products);
  } catch (error) {
    productList.innerHTML = '<p>Không thể tải dữ liệu sản phẩm.</p>';
    console.error(error);
  }
}

function renderCategoryOptions() {
  const categories = Array.from(new Set(products.map(item => item.category)));
  categories.sort();
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

function renderProducts(items) {
  if (!items.length) {
    productList.innerHTML = '<p>Không tìm thấy sản phẩm phù hợp.</p>';
    return;
  }

  productList.innerHTML = items.map(product => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
      <div class="product-meta">
        <span><strong>Danh mục:</strong> ${product.category}</span>
        <span><strong>Giá:</strong> ${product.price}</span>
        <span><strong>Nguồn gốc:</strong> ${product.origin}</span>
      </div>
    </article>
  `).join('');
}

function filterProducts() {
  const category = categorySelect.value;
  const search = searchInput.value.trim().toLowerCase();

  const filtered = products.filter(product => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(search) || product.description.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });

  renderProducts(filtered);
}

categorySelect.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);

loadProducts();
