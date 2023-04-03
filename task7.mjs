import Shop from "./task7/Shop.mjs";
import Product from "./task7/Product.mjs";
import Warehouse from "./task7/Warehouse.mjs";
export default function task7() {
  // Створення магазинів
  const shops = [];
  shops.push(new Shop("Магазин 1", "Львів"));
  shops.push(new Shop("Магазин 2", "Київ"));

  // Редагування магазину
  shops[0].name = "Магазин 1 - вул. Незалежності";

  // Видалення магазину
  const shopIndex = shops.findIndex((shop) => shop.name === "Магазин 2");
  if (shopIndex !== -1) {
    shops.splice(shopIndex, 1);
  }

  // Пошук магазину
  const shop = shops.find(
    (shop) => shop.name === "Магазин 1 - вул. Незалежності"
  );

  // Створення товарів
  const products = [];
  products.push(new Product("Товар 1", 100, 10));
  products.push(new Product("Товар 2", 200, 20));
  products.push(new Product("Товар 3", 300, 30));
  products.push(new Product("Товар 4", 400, 40));

  // Редагування товару
  products[0].name = "Товар 1 - оновлений";

  // Видалення товару
  const productIndex = products.findIndex(
    (product) => product.name === "Товар 2"
  );
  if (productIndex !== -1) {
    products.splice(productIndex, 1);
  }

  // Пошук товару
  const product = products.find(
    (product) => product.name === "Товар 1 - оновлений"
  );
  console.log(product);

  // Створення складу
  const warehouses = [];
  warehouses.push(new Warehouse("Склад 1", "Львів"));
  warehouses.push(new Warehouse("Склад 2", "Київ"));
  warehouses.push(new Warehouse("Склад 3", "Вінниця"));
  // Редагування складу
  warehouses[0].name = "Склад 1 - вул. Незалежності";

  // Видалення складу
  const warehousesIndex = warehouses.findIndex(
    (warehouse) => warehouse.name === "Склад 2"
  );
  if (warehousesIndex !== -1) {
    warehouses.splice(warehousesIndex, 1);
  }

  // Пошук складу
  const warehouse = warehouses.find(
    (warehouse) => warehouse.name === "Склад 1 - вул. Незалежності"
  );

  // Доставка товару на склад
  warehouse.addProduct(products[0]);
  warehouse.addProduct(products[1]);
  warehouse.addProduct(products[2]);

  // Видалення товару зі складу
  warehouse.removeProduct(products[0]);
  // Трансфер товару із складу на склад
  const sourceWarehouse = warehouses[0];
  const destinationWarehouse = warehouses[1];
  const productToTransfer = products[0];

  sourceWarehouse.removeProduct(productToTransfer);
  destinationWarehouse.addProduct(productToTransfer);

  // Відвантаження товару в магазин зі складу
  const shopToShipTo = shops[0];
  const productToShip = products[0];

  const index = destinationWarehouse.products.findIndex(
    (product) => product === productToShip
  );
  if (index !== -1) {
    sourceWarehouse.products.splice(index, 1);
    shopToShipTo.products.push(productToShip);
  }
  // Отримання списку товарів на складі
  const productsInWarehouse = warehouse.products;
  console.log("productsInWarehouse", productsInWarehouse);

  // Отримання списку товарів у магазині
  const productsInShop = shop.products;
  console.log('productsInShop', productsInShop);
}
