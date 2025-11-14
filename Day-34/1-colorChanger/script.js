const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // where the 'click' event happend
        console.log(e);
        // element
        console.log(e.target);
        // id of that element
        console.log(e.target.id);
        
        // check the color
        if (e.target.id === 'grey') {
            // add to the body
            body.style.backgroundColor = e.target.id
        }

        // check the color
        if (e.target.id === 'white') {
            // add to the body
            body.style.backgroundColor = e.target.id
        }

        // check the color
        if (e.target.id === 'blue') {
            // add to the body
            body.style.backgroundColor = e.target.id
        }

        // check the color
        if (e.target.id === 'yellow') {
            // add to the body
            body.style.backgroundColor = e.target.id
        }

        // check the color
        if (e.target.id === 'purple') {
            // add to the body
            body.style.backgroundColor = e.target.id
        }
    })
})