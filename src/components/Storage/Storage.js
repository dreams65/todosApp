class Storage {
    static addTostorage(todoArray) {
        let storage = localStorage.setItem('todo', JSON.stringify(todoArray));
        return storage;
    }

    static getStorage() {
        let storage = localStorage.getItem('todo') === null ?
        [] : JSON.parse(localStorage.getItem('todo'));
        return storage;
    }
}