let database = require('./database')
const initializeDatabase = require('./initializeDatabase')

const ObjectLength = (object) => {
    let length = 0
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            ++length
        }
    }
    return length
}

const determineSave = () => {
    //load from storage
    database.load()

    //if database isn't in storage, initialize with existing data and save
    if (database.entities === null) {
        database.entities = {}
        initializeDatabase()
        database.save()
    } else {
        //if it is storage but has fewer than the initial records, erases existing data and re-initializes the database
        //make sure to update the length in this line.
        if (ObjectLength(database.entities) < 6) {
            database.entities = {}
            initializeDatabase()
            database.save()
        } else {
            //if it is in storage but contains more than the initial records, save with no changes
            database.save()
        }
    }
}

module.exports = determineSave