const input = document.querySelector(".input input");
const passbox = document.querySelector(".passbox input");
const len = document.querySelector(".len");
const lowercase = document.getElementById("lower");
const uppercase = document.getElementById("upper");
const number = document.getElementById("number");
const symbol= document.getElementById("symbols");
const generate = document.querySelector(".generate button");
const copy = document.getElementById("copy");

len.innerText = passbox.value;
passbox.addEventListener("input",() => {
    len.innerText = passbox.value;
});

generate.addEventListener("click" , () => {
    input.value = generatepassward();
});

copy.addEventListener("click",() => {
    navigator.clipboard.writeText(input.value)
})

let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
let symbols = "~!@#$%^&*()_+{}|:<>?`-=[]\;',./";

function generatepassward() {
    let generatepassward = "";
    let allchars = "";

    allchars += lowercase.checked ? lowerchars : "";
    allchars += uppercase.checked ? upperchars : "";
    allchars += number.checkedr ? numbers : "";
    allchars += symbol.checked ? symbols : "";

    if(allchars === "" || allchars === 0) {
        return "";
    }
    
    let i = 1;
    while(i<=passbox.value) {
        generatepassward += allchars[Math.floor(Math.random() * allchars.length)];
        i++;
    }

    return generatepassward;
}