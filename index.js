/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("value")
const btnEL = document.getElementById("convert")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")


function convertLength(number){
    const feet = (number * 3.281).toFixed(3)    
    const meter = (number / 3.281).toFixed(3)    
    lengthEl.innerHTML = `${number} meters = ${feet} feet | ${number} feet = ${meter} meters`  
}

function convertVolume(number){
    const gallons = (number * 0.264).toFixed(3)
    const liter = (number / 0.264).toFixed(3)
    volumeEl.innerHTML = `${number} liters = ${gallons} gallons | ${number} gallons = ${liter} liters`
}

function convertMass(number){
    const pound = (number * 2.204).toFixed(3)
    const kilo = (number / 2.204).toFixed(3)
    massEl.innerHTML = `${number} kilos = ${pound} pounds | ${number} pounds = ${kilo} kilos`
}

btnEL.addEventListener("click", function(){
   convertLength(input.value)
   convertVolume(input.value)
   convertMass(input.value)
})
