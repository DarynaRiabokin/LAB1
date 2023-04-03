class Shop {
  constructor(name, location) {
    this.products = [];
    this.name = name;
    this.location = location;
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}

export default Shop;
