let promises = []

const manyCalls = (id) => {
    APIManager.getDataA(parseInt(id))
    .then(dataElements => {
        dataElements.forEach(element =>{
            //this creates an array of promises, NOT an array of data.
            promises.push(APIManager.getDataB(element.elementID))
        })
    })
    //Promise.all forces all of the promises in the array to be fulfilled before continuing.
    Promise.all(promises)
    .then(result => {
        //do stuff with the data
        //probably will want to push to a new array for further manipulation.
    })
}