///////////1
let out1 = document.querySelector('.out-1');
let btn1 = document.querySelector('.b-1');
function f1() {
    let i1 = document.querySelector('.i-1').value;
     if (+i1 < 12){
        out1.innerHTML = "дитина";
     }
     else if (+i1 <18){
        out1.innerHTML = "підліток";
    }
     else if (+i1 <60){
        out1.innerHTML = "дорослий";
     }
     
     else{
        out1.innerHTML = "пенсіонер"
     }

}
btn1.onclick = f1;
//////////2
let out22 = document.querySelector('.out-2');
let btn22 = document.querySelector('.b-2');
function f2() {
    let i2 = document.querySelector('.i-2').value;
     if (+i2 ==  1){
        out22.innerHTML = i2 + "!";
     }
     else if (+i2 ==  2){
        out22.innerHTML = i2 + "@";
    }
     else if (+i2 ==  3){
        out22.innerHTML = i2 + "#";
     }
     else if (+i2 ==  4){
        out22.innerHTML = i2 + "$";
     }
     else if (+i2 ==  5){
        out22.innerHTML = i2 + "%";
     }
     else if (+i2 ==  6){
        out22.innerHTML = i2 + "^";
     }
     else if (+i2 ==  7){
        out22.innerHTML = i2 + "&";
     }
     else if (+i2 ==  8){
        out22.innerHTML = i2 + "*";
     }
     else if (+i2 ==  9){
        out22.innerHTML = i2 + "(";
     }
     
     else{
        out22.innerHTML = i2 + ")"
     }

}
btn22.onclick = f2;

////////////////////////////////3
let btn3 = document.querySelector('.b-3');
let out3 = document.querySelector('.out-3');
function f3() {
    let i33 = document.querySelector('.i-3').value;
    let i34 = document.querySelector('.i-4').value;

    let result = +i33 + +i34;
       out3.innerHTML = result;
}
btn3.onclick = f3;
/////////////////////////4
let btn4 = document.querySelector('.b-4');
let out4 = document.querySelector('.out-4');
function f4() {
    let i44 = document.querySelector('.i-44').value;
    let i45 = document.querySelector('.i-45').value;
        if (+i44 > +i45){
            out4.innerHTML = +i44;
        }
        else {
            out4.innerHTML = +i45;
        }
    
}
btn4.onclick = f4;
////////////////////////////5
let btn5 = document.querySelector('.b-5');
let out5 = document.querySelector('.out-5')
function f5() {
    let divisorsString = "";
    let i55 = document.querySelector('.i-55').value;
    for (let i = 1; i <= i55;i++){
        if (+i55 % i===0) {

        }
        if (divisorsString === "") {
            divisorsString += i;
        } else {
            divisorsString += ", " + i;
        }
    }
    out5.innerHTML = "Делители числа " + i55 + ": " + divisorsString;
}
btn5.onclick = f5;
