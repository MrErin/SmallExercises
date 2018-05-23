//click a button that is labeled with data from the API

$(`#button_id_${APIData}`).click(() => {
    APIManager.deleteData(APIData)
    .then(() => {
        $(`#element_id_${APIData}`).remove()
    })
})