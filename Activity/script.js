let btn = document.querySelector('button');
btn.addEventListener('click' , function () {
    // //generate a random color
    // let r = Math.floor(Math.random() * 256);
    // let g = Math.floor(Math.random() * 256);
    // let b = Math.floor(Math.random() * 256);

    // let h2 = document.querySelector('h2');
    // h2.innerText = `RGB(${r} , ${g} , ${b})`;

    // let div = document.querySelector('div');
    // // div.setAttribute('style' , `background-color: rgb(${r},${g},${b})`);
    // div.style.backgroundColor = `rgb(${r},${g},${b})`;

    let color = randomColor();
    
    let h2 = document.querySelector('h2');
    h2.innerText = color;

    let div = document.querySelector('div');
    div.style.backgroundColor = color;
});

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red} , ${green} , ${blue})`
    return color;
}