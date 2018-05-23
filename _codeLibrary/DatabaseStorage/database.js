const database = Object.create({}, {
    entities: {
        value: {},
        writable: true,
        enumerable: true
    },
    save: {
        value: function () {
            localStorage.setItem('varDatabase', JSON.stringify(this.entities))
        }
    },
    load: {
        value: function () {
            if (localStorage.getItem('varDatabase') !== null) {
                this.entities = JSON.parse(localStorage.getItem('varDatabase'))
            }
        }
    }
})

module.exports = database