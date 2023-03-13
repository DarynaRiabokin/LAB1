import { uuid } from 'uuidv4';

class Goods {
    title;
    #id;

    constructor(title) {
        this.title = title;

        this.#id = uuid();
    }

    get id() {
        return this.#id;
    }

}

export default Goods;