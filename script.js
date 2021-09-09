var nota1;
var nota2;
var nota3;
var nota4;
var nota5;
var nota6;

nota1 = prompt("Cual es tu primera nota");
nota1=parseInt(nota1);
nota2 = prompt("Cual es tu segunda nota");
nota2=parseInt(nota1);
nota3 = prompt("Cual es tu tercera nota");
nota3=parseInt(nota1);
nota4 = prompt("Cual es tu cuarta nota");
nota4=parseInt(nota4);
nota5 = prompt("Cual es tu quinta nota");
nota5=parseInt(nota5);
nota6 = prompt("Cual es tu sexta nota");
nota6=parseInt(nota6);

var suma;
suma=nota1+nota2+nota3+nota4+nota5+nota6;
var promedio;
promedio=suma/6;
document.write("La nota media es: " + promedio);

document.write("<br>");

if (promedio > 0 && promedio < 3) {
  document.write("Muy deficiente");
}else if (promedio > 3 && promedio < 5) {
  document.write("Insuficiente");
}else if (promedio > 5 && promedio < 6) {
  document.write("Suficiente");
}else if (promedio > 6 && promedio < 7) {
  document.write("Bien");
}else if (promedio > 7 && promedio < 8) {
  document.write("Notable");
}else if (promedio == 9) {
  document.write("Sobresaliente");
}else{
  document.write("Matricula de honor");
}
/*
function Calcular(){
  var nota1=document.getElementById('nota1').value;
  var nota2=document.getElementById('nota2').value;
  var nota3=document.getElementById('nota3').value;
  var nota4=document.getElementById('nota4').value;
  var nota5=document.getElementById('nota5').value;
  var nota6=document.getElementById('nota6').value;
}


var nota=(parseInt(nota1)+parseInt(nota2)+parseInt(nota3)+parseInt(nota4)+parseInt(nota5)+parseInt(nota6))/6;
document.getElementById('promedio').innerHTML=nota;
("La nota media es: " + nota);
*/

