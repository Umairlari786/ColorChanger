const click = document.getElementById("btn");
const code = document.getElementById("color-code");


const getColor =() =>{
    //make random number or get random number
    //multiply with 16777215 cuz to get a num which can be converted to hexadesimal form
    // bring that num to nearest roundOff
    //convert that num to hexadesimal through concatination



    const randomNum = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNum.toString(16);
    document.body.style.backgroundColor = randomCode;
    code.innerText = randomCode;

    navigator.clipboard.writeText(randomCode);
}

click.addEventListener(
    "click", 
    getColor
);

getColor();