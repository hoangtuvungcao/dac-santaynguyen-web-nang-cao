/**
 * ĐẶC SẢN TÂY NGUYÊN - MAIN JAVASCRIPT LOGIC
 * Bài thực hành 1: Khởi tạo dự án Web
 */

// 1. In thông báo khởi động dự án ra Console theo yêu cầu bài thực hành
console.log("==================================================");
console.log("KHỞI TẠO DỰ ÁN WEB: ĐẶC SẢN TÂY NGUYÊN THÀNH CÔNG!");
console.log("Tải tệp dữ liệu: data/products.json");
console.log("Thiết lập giao diện: CSS Design System Bazan");
console.log("==================================================");

// Biến lưu trữ trạng thái ứng dụng (Application State)
let productsData = [];
let filteredProducts = [];
let currentCategory = 'all';
let cartCount = 0;

// Các phần tử DOM chính
const productsContainer = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const cartBadge = document.getElementById('cart-badge');
const quickViewModal = document.getElementById('quick-view-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');

// 2. Khởi tạo ứng dụng khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  fetchProducts();
  setupEventListeners();
});

// 3. Tải dữ liệu sản phẩm từ products.json
async function fetchProducts() {
  try {
    const response = await fetch('data/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    productsData = await response.json();
    filteredProducts = [...productsData];
    renderProducts(filteredProducts);
  } catch (error) {
    console.error('Lỗi khi nạp danh sách sản phẩm:', error);
    if (productsContainer) {
      productsContainer.innerHTML = `
        <div class="empty-products">
          <h3>Không thể tải dữ liệu sản phẩm</h3>
          <p>Vui lòng kiểm tra lại kết nối hoặc tệp dữ liệu.</p>
        </div>
      `;
    }
  }
}

// 4. Render danh sách thẻ sản phẩm HTML
function renderProducts(products) {
  if (!productsContainer) return;

  if (products.length === 0) {
    productsContainer.innerHTML = `
      <div class="empty-products">
        <h3>Không tìm thấy sản phẩm nào</h3>
        <p>Thử tìm kiếm với từ khóa khác hoặc chọn danh mục sản phẩm khác.</p>
      </div>
    `;
    return;
  }

  productsContainer.innerHTML = products.map(product => `
    <article class="product-card" data-id="${product.id}">
      <div class="product-image-box">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80'">
      </div>
      <div class="product-info">
        <div class="product-meta">
          <span class="product-origin">Xuất xứ: ${product.origin}</span>
          <span class="product-rating">Đánh giá: ${product.rating} (${product.reviewsCount})</span>
        </div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        
        <div class="product-footer">
          <div class="price-box">
            <span class="current-price">${formatCurrency(product.price)}</span>
            ${product.originalPrice ? `<span class="original-price">${formatCurrency(product.originalPrice)}</span>` : ''}
          </div>
          <div class="card-actions">
            <button class="btn-quick-view" onclick="openQuickView('${product.id}')" title="Xem nhanh">
              Xem
            </button>
            <button class="btn-add-cart" onclick="addToCart('${product.name}')" title="Thêm vào giỏ">
              Thêm
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

// 5. Định dạng tiền tệ VND
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// 6. Xử lý Lọc & Tìm Kiếm
function filterAndSearch() {
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

  filteredProducts = productsData.filter(product => {
    const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
      product.origin.toLowerCase().includes(searchTerm) ||
      product.categoryName.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  renderProducts(filteredProducts);
}

// 7. Thiết lập Event Listeners
function setupEventListeners() {
  // Bộ lọc danh mục
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.dataset.category;
      filterAndSearch();
    });
  });

  // Tìm kiếm theo từ khóa
  if (searchInput) {
    searchInput.addEventListener('input', filterAndSearch);
  }

  // Đóng Quick View Modal
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeQuickView);
  }

  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) {
        closeQuickView();
      }
    });
  }

  // Dark / Light Mode Toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
}

// 8. Xem Nhanh Sản Phẩm (Quick View Modal)
window.openQuickView = function (productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product || !quickViewModal) return;

  document.getElementById('modal-img').src = product.image;
  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-origin').textContent = `Xuất xứ: ${product.origin} | Quy cách: ${product.unit}`;
  document.getElementById('modal-desc').textContent = product.description;
  document.getElementById('modal-price').textContent = formatCurrency(product.price);
  document.getElementById('modal-original-price').textContent = product.originalPrice ? formatCurrency(product.originalPrice) : '';

  const addBtn = document.getElementById('modal-add-cart-btn');
  addBtn.onclick = () => {
    addToCart(product.name);
    closeQuickView();
  };

  quickViewModal.classList.add('active');
};

function closeQuickView() {
  if (quickViewModal) {
    quickViewModal.classList.remove('active');
  }
}

// 9. Thêm sản phẩm vào giỏ hàng + Toast Notification
window.addToCart = function (productName) {
  cartCount++;
  if (cartBadge) {
    cartBadge.textContent = cartCount;
  }
  showToast(`Đã thêm <strong>${productName}</strong> vào giỏ hàng thành công!`);
};

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<div>${message}</div>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// 10. Quản lý Dark/Light Theme
function initTheme() {
  const savedTheme = localStorage.getItem('tay_nguyen_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeText(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('tay_nguyen_theme', newTheme);
  updateThemeText(newTheme);
}

function updateThemeText(theme) {
  if (themeToggleBtn) {
    themeToggleBtn.textContent = theme === 'dark' ? 'Giao diện Tối' : 'Giao diện Sáng';
  }
}
