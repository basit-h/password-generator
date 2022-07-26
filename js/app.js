const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passOneEl = document.getElementById("pass-one")
let passTwoEl = document.getElementById("pass-two")
let notificationEl = document.querySelector(".notification")
let includeNumbersAndSymbols = false
let passLength = 15

function generatePassword() {
    passLength = parseInt(document.getElementById("passwd-length").value)
    passLength = isNaN(passLength) ? 15 : passLength
    passOneEl.textContent = ""
    passTwoEl.textContent = ""
    includeNumbersAndSymbols = document.getElementById("checker").checked;

    if(includeNumbersAndSymbols){
        complexPassword(passLength)
    }else{
        normalPassword(passLength)
    }
    notificationEl.classList.add("show")
    document.getElementById("pass-one").classList.add("show")
    document.getElementById("pass-two").classList.add("show")
}

function complexPassword(passLength) {
    for (let i = 0; i < passLength; i++) {
        let rand = Math.floor(Math.random() * 62)
        passOneEl.textContent += characters[rand]
    }
    for (let i = 0; i < passLength; i++) {
        let rand = Math.floor(Math.random() * 62)
        passTwoEl.textContent += characters[rand]
    }
}
function normalPassword(passLength){
    for (let i =0; i<passLength; i++){
        let rand = Math.floor(Math.random() * 52)
        passOneEl.textContent += characters[rand]
    }
    for(let i =0; i < passLength; i++){
        let rand = Math.floor(Math.random() * 52)
        passTwoEl.textContent += characters[rand]
    }
}

function copyFirstPass(){
    let pass = document.getElementById("pass-one").textContent
    if(pass != ''){
        navigator.clipboard.writeText(pass)
        notificationEl.textContent="Copied : "+pass
        notificationEl.classList.add("show")
    }
    
}

function copySecondPass(){
    let pass = document.getElementById("pass-two").textContent
    if(pass != ''){
        navigator.clipboard.writeText(pass)
        notificationEl.textContent="Copied : " + pass
        notificationEl.classList.add("show")
    }
}