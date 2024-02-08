let name1="Alisa"
let name2="Ivan"
let name3="Alina"
let name4="Valeria"
let name5="Alice"

// let name1="Alisia"
// let name2="Ivani"

/* let name3="Aliina"
let name4="Valeriia"*/ 

// let name5="Aliice"

document.querySelector('.out-1').textContent=name1
document.querySelector('.out-1').textContent=name2
document.querySelector('.out-1').textContent=name3
document.querySelector('.out-1').textContent=name4
document.querySelector('.out-1').textContent=name5

// типи змінних
const name="Alice"
let last="Alice"
var firstName="Alice"

    //   task 2!!!

function t1() {
    let hello="Привіт"
let data = document.querySelector('.i-2').value;
    document.querySelector('.out-2').textContent = hello + ' ' + data;
}

document.querySelector('.b-2').onclick =  t1;
    //    task-3!!!!

function t2() {
    const year = 2024
let data2 = document.querySelector('.i-3').value;
   document.querySelector('.out-3').textContent = year - data2;


}
document.querySelector('.b-3').onclick = t2;

           // task-4

function t4() {
    let a = document.querySelector('.i-4').value;
   
    document.querySelector('.out-4').textContent = a * 4;
    
}          
document.querySelector('.b-4').onclick = t4;