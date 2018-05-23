const databaseIDGenerator = require('./databaseIDGenerator')
const database = require('./database')

const createEntity = (entityName) => {
    const newEntity = Object.create({}, {
        'entityName': {
            value: entityName,
            enumerable: true
        }
    })
    //get ID from generator object
    databaseIDGenerator.loadID()
    let entityUID = '_' + databaseIDGenerator.currentID
    databaseIDGenerator.currentID++
    databaseIDGenerator.saveID()

    //create key in database from ID generator
    database.entities[entityUID] = newEntity
    database.save()
    return entityUID
}

module.exports = createEntity