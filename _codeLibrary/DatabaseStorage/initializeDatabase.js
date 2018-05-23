const createEntity = require('./createEntity')

const initializeDatabase = () => {
    createEntity('testData1')
    createEntity('testData2')
}

module.exports = initializeDatabase