    //! --- Quadratic Equation --- //
function quad() {
var a = +prompt("Введите a");
var b = +prompt("Введите b");
while (b === 0) {
  alert("Error");
  var b = +prompt("Введите b еще раз");
}
var c = +prompt("Введите c");
if (a == 0) {
  var xa = -c / b;
  alert("X: " + Math.round(xa));
}
var d = b * b - 4 * a * c;
if (d === 0) {
  var x0 = -b / (2 * a);
  alert("Дискриминант равен нулю");
  alert("X: " + x0);
} else if (d > 0) {
  var x1 = (-b - Math.sqrt(d)) / (2 * a);
  var x2 = (-b + Math.sqrt(d)) / (2 * a);
  alert("X1: " + Math.floor(x1));
  alert("X2: " + Math.floor(x2));
} else {
  alert("Дискриминант отрицательный");
  alert("√" + d);
}
}

   //! --- Pifagor's Theorem --- //

function pifagor() {
let a = prompt("Введите значение 1 катета");
let b = prompt("Введите значение 2 катета");
let c = prompt("Введите значение гипотенузы");
let a1 = Math.pow(a, 2);
let b1 = Math.pow(b, 2);
let c1 = Math.pow(c, 2);
if (isNaN(a)) {
    a1 = c1 - b1;
    alert("Катет равен: " + Math.sqrt(a1) + "см");
}
if (isNaN(b)) {
    b1 = c1 - a1;
    alert("Катет равен: " + Math.sqrt(b1) + "см");
}
if (isNaN(c)) {
    c1 = a1 + b1;
    alert("Гипотенуза равна: " + Math.sqrt(c1) + "см");
}
if (isNaN(a) && isNaN(b) || isNaN(a) && isNaN(c) || isNaN(b) && isNaN(c)) {
    alert("Теорема пифагора тут не поможет(");
}
if (c1 == a1 + b1) {
    alert("Треугольник прямоугольный");
}
else {
    alert(c1 + "≠" + (a1 + b1) + " Треугольник не является прямоугольным");
}
}