class StorageGoods {
    goodId;
    storageId;

    constructor(goodId, storageId) {
        this.goodId = goodId;
        this.storageId = storageId;
    }

    migrateToAnotherStorage(storageId) {
        this.storageId = storageId;
    }
}

export default StorageGoods;