// Định nghĩa đối tượng giỏ hàng
class Cart {
  constructor() {
    this.items = [];
  }

  // Thêm sản phẩm vào giỏ hàng
  addItem(product, quantity) {
    this.items.push({ product, quantity });
  }

  // Xóa sản phẩm khỏi giỏ hàng
  removeItem(product) {
    this.items = this.items.filter(item => item.product !== product);
  }

  // Lấy tổng số lượng sản phẩm trong giỏ hàng
  getItemCount() {
    let count = 0;
    for (const item of this.items) {
      count += item.quantity;
    }
    return count;
  }

  // Lấy tổng giá trị của giỏ hàng
  getTotalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.product.price * item.quantity;
    }
    return totalPrice;
  }
}

// Sử dụng giỏ hàng
const cart = new Cart();

// Thêm sản phẩm vào giỏ hàng
const product1 = { name: 'Áo', price: 20 };
cart.addItem(product1, 2);

const product2 = { name: 'Quần', price: 30 };
cart.addItem(product2, 1);

// Lấy thông tin giỏ hàng
console.log('Số lượng sản phẩm trong giỏ hàng:', cart.getItemCount());
console.log('Tổng giá trị của giỏ hàng:', cart.getTotalPrice());

// Xóa sản phẩm khỏi giỏ hàng
cart.removeItem(product1);

// Lấy thông tin giỏ hàng sau khi xóa
console.log('Số lượng sản phẩm trong giỏ hàng:', cart.getItemCount());
console.log('Tổng giá trị của giỏ hàng:', cart.getTotalPrice());