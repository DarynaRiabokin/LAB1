import { uuid } from 'uuidv4';

class Storage {
    #id;

    constructor() {
        this.#id = uuid();
    }

    get id() {
        return this.#id;
    }
}

export default Storage;