//create a button and attach a listener:

const buttonClickEvent = () => {
    const submit = document.getElementById('submit')
    submit.addEventListener('click', () => {
        //function goes here
    })
}

//attaching a listener by an element's ID (requires jQuery):

$('#elementID').click(() => {
    //do stuff
})