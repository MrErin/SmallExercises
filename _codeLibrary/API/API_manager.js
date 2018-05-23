const $ = require('jquery')

const APIManager = Object.create(null, {
    getAllData: {
        value: function () {
            return $.ajax('http://localhost:8088/data')
        }
    },
    getSpecificData: {
        value: function (id) {
            return $.ajax(`http://localhost:8088/data/?id=${id}`)
        }
    },
    postData: {
        value: function (dataObject) {
            return $.ajax({
                url: 'http://localhost:8088/data',
                type: 'POST',
                data: dataObject
            })
        }
    },
    deleteData: {
        value: function (id) {
            return $.ajax({
                url: `http://localhost:8088/data/${id}`,
                type: 'DELETE'
            })
        }
    },
    putData: {
        value: function (id, dataObject) {
            return $.ajax({
                url: `http://localhost:8088/data/${id}`,
                type: 'PUT',
                data: dataObject
            })
        }
    }
})

module.exports = APIManager