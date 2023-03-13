import Shop from "./Shop";
import Storage from "./Storage";
import Goods from "./Goods";
import StorageGoods from "./StorageGoods";

let shopCounter = 0;
let storageCounter = 0;
let goodCounter = 0;
let storageGoodCounter = 0;

const shop = new Map();
const storage = new Map();
const good = new Map();
const storageGood = new Map();

addShop('shop1', 'Naukova Street, 4', '2021');
addShop('shop2', 'Stryjska Street, 7', '2020');
addGood('makaron');
addGood('salo');
addGood('pampushka');
addStorage();
addStorage();
addStorageGood(1, 1);
addStorageGood(2, 1);
addStorageGood(3, 2);

function addShop(name, location, created) {
    shopCounter++;
    shop.set(`shop${shopCounter}`, new Shop(name, location, created));
}

function addGood(title) {
    goodCounter++;
    good.set(`good${goodCounter}`, new Goods(title));
}

function addStorage() {
    storageCounter++;
    storage.set(`storage${storageCounter}`, new Storage());
}

function addStorageGood(goodId, storageId) {
    storageGoodCounter++;
    storageGood.set(`storageGood${storageGoodCounter}`, new StorageGoods(good.get(`good${goodId}`).id,  storage.get(`storage${storageId}`).id))
}
