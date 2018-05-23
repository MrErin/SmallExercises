const getData = function (dataID) {
    APIManager.getSubsetData(parseInt(dataID))
        .then(dataElements => {
            dataElements.forEach(element => {
                //something happens
            })
        })
        .then(() => {
            //something else happens
        })
}