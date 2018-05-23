const databaseIDGenerator = Object.create({}, {
    currentID: {
        value: 1,
        writable: true,
        enumerable: true
    },
    saveID: {
        value: function () {
            localStorage.setItem('varID', JSON.stringify(this.currentID))
        }
    },
    loadID: {
        value: function () {
            if (localStorage.getItem('varID') !== null) {
                this.currentID = JSON.parse(localStorage.getItem('varID'))
            }
        }
    }
})

module.exports = databaseIDGenerator