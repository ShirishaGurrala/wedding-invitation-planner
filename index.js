

let firstNameTextNode = document.getElementById('nameText')
let secondNameTextNode = document.getElementById('secondNameText')
let lastNameTextNode = document.getElementById('lastNameText')
let dateTextNode = document.getElementById('dateText')

function firstName() {
    document.getElementById('initial1').innerHTML = firstNameTextNode.value.slice(0,1)
    document.getElementById('input1').innerHTML = firstNameTextNode.value
    
}

firstNameTextNode.addEventListener('keyup', firstName)


function secondName() {
    document.getElementById('initial2').innerHTML = secondNameTextNode.value.slice(0,1)
    document.getElementById('input2').innerHTML = secondNameTextNode.value
    
}

secondNameTextNode.addEventListener('keyup', secondName)


function lastName() {
   
    document.getElementById('input3').innerHTML = lastNameTextNode.value
    
}

lastNameTextNode.addEventListener('keyup', lastName)

function dateText() {
   
    document.getElementById('input4').innerHTML = dateTextNode.value
    
}

dateTextNode.addEventListener('keyup', dateText)

let locationNode = document.getElementById('location')

function locationText() {
   
    document.getElementById('input5').innerHTML = locationNode.value
    
}

locationNode.addEventListener('keyup', locationText)


function design1(){
    document.getElementsByClassName('aside-2')[0].style.backgroundImage="url(./image/image7.jpg)";
    document.getElementsByClassName('imgtext')[0].style.fontFamily = "Cinzel, serif"
    document.getElementsByClassName('imgtext')[0].style.color = "black"
}

function design2(){
    document.getElementsByClassName('aside-2')[0].style.backgroundImage = "url(./image/image6.jpg)";
   // document.getElementsByClassName('imgtext')[0].style.fontFamily = "Dancing Script, cursive"
   document.getElementsByClassName('imgtext')[0].style.fontFamily = "Tiro Gurmukhi, serif" 
   document.getElementsByClassName('imgtext')[0].style.color = "white"
}

function design3(){
    document.getElementsByClassName('aside-2')[0].style.backgroundImage= "url(./image/image3.jpg)";
   // document.getElementsByClassName('imgtext')[0].style.fontFamily = "Tiro Gurmukhi, serif"
   document.getElementsByClassName('imgtext')[0].style.fontFamily = "Dancing Script, cursive"
    document.getElementsByClassName('imgtext')[0].style.color = "black"
}

