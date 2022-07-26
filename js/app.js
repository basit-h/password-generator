const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passOneEl = document.getElementById("pass-one")
let passTwoEl = document.getElementById("pass-two")
let notificationEl = document.querySelector(".notification")
let includeNumbersAndSymbols = false
let passLength = 15

function generatePassword() {
    passLength = parseInt(document.getElementById("passwd-length").value)
    if(isNaN(passLength)){
        notificationEl.textContent="Specify the length between 1 to 100 and only write numbers"

        notificationEl.classList.add("showError")
        return false
    }
    console.log(passLength)
    passOneEl.textContent = ""
    passTwoEl.textContent = ""
    includeNumbersAndSymbols = document.getElementById("checker").checked;
    if(passLength > 100){
        showError("Password length should be not more than 100")
        hideData();
        return false
    }else{
        removeError()
        if(includeNumbersAndSymbols){
            complexPassword(passLength)
            showData()
        }else{
            normalPassword(passLength)
            showData()
        }
    }
    
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
        notificationEl.textContent="Copied!"
        notificationEl.classList.add("show")
    }
    
}

function copySecondPass(){
    let pass = document.getElementById("pass-two").textContent
    if(pass != ''){
        navigator.clipboard.writeText(pass)
        notificationEl.textContent="Copied!"
        notificationEl.classList.add("show")
    }
}

function showData(){
    notificationEl.textContent="Click on the box to copy password"
    notificationEl.classList.add("show")
    document.getElementById("pass-one").classList.add("show")
    document.getElementById("pass-two").classList.add("show")
}
function hideData(){
    notificationEl.classList.remove("show")
    document.getElementById("pass-one").classList.remove("show")
    document.getElementById("pass-two").classList.remove("show")
}

function showError(message){
    notificationEl.textContent=message
    notificationEl.classList.add("showError")
}
function removeError(){
    notificationEl.classList.remove("showError")
}