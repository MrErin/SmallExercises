const database = require('./database')
const componentFactory = require('./componentFactory')
const apnd = require('./apnd')
const determineSave = require('./determineSave')
const nuke = require('./nuke')

const contentHook = document.getElementById('contentHook')
const fragment = document.createDocumentFragment()

const cardDisplay = () => {
    determineSave()
    nuke('contentHook')
    for (let entity in database.entities) {
        const section = componentFactory('section', '', 'sectionID', 'card')
        const cardTitle = componentFactory('h3', database.entities[entity].entityName, '', 'cardTitle')

        //add more info from database as needed

        apnd(section, cardTitle)
        apnd(fragment, section)
    }
    apnd(contentHook, fragment)
}

module.exports = cardDisplay