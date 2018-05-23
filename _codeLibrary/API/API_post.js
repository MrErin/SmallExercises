const postData = (dataObject) => {
    const dataInput = componentFactory('input', 'some data!', 'someDataInputID', 'dataClass')

    //save button is not defined here but whatevs
    saveButtonInput.addEventListener('click', function (event) {
        const newInfo = $('#someDataInputID').val()
    })

    APIManager.postData({
            'newInfo': newInfo
        })
        .then(function () {
            $('#someDataInputID').val('')
        })
}