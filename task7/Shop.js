class Shop {
    name;
    location;
    #created;

    constructor(name, location, created) {
        this.name = name;
        this.location = location;
        this.created = created;
   }

   set created(value) {
        if(!this.#created) {
            if(new Date(value).getTime() <= new Date().getTime()) {
                this.#created = new Date(value).getFullYear().toString();
            } else {
                this.#created = new Date().getFullYear().toString();
            }
        }
   }

   get created() {
    return this.#created;
   }
}

export default Shop;
