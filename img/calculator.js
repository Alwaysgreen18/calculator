let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultbox = document.querySelector("#result-box");
let clearBtn = document.querySelector('#clear');

let total = document.querySelector("#total");

let btnspread = [...btns];
let allBtnSpread = [...allBtns];


btnspread.foreach((button, i) => {button.addEventListener("click", () => {
    //inner values for calculator
    
if (resultbox.innerHTML == "0") {
    resultbox.innerHTML = "";
}

let value =  btns[i].innerHTML; resultbox.innerHTML += value;
});
});

//function to evaluate strings
function evaluate(fn) {return new function(
        'return' + fn();
}
//to calculate all inputs

total.addEventListener('click', ()=> {let allinputs = resultbox.innerHTML;

    resultbox.innerHTML = evaluate(allinputs);

console.log(evaluate(allinputs));})

//clear all inputs
clearBtn.addEventListener('click',()=> {resultbox.HTML = "0";})