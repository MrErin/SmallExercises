//create jQuery modals by appending interpolated html to a hook:

const myModal = () => {
    $("#modalHook").append(`
        <h3>Form Title</h3
        <input type="text" placeholder="email" id="email">
        <button type="submit" id="submitButton" class="btn">Submit</button>
    `)
    $('#submitButton').click(()=>{
        //do stuff
    })
}

//there's another part to this but I'm not sure what it is?