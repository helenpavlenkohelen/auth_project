Object.assign(Storage.prototype, {
    storeObject: function (key, object) {
        this.setItem(key, JSON.stringify(object))
    },
    getObject: function (key) {
        const item = this.getItem(key)
        return item ? JSON.parse(item) : null
    }
})
