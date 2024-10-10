/*Múltiplos de 3
Faça um programa que imprima na tela todos os múltiplos de 3 compreendidos entre 0 e 500.

Os múltiplos de 3 são: 0, 3, 6, 9, 12...

Portanto, deverá ser impresso o console da seguinte forma:

0
3
6
9
12
...
imprima no console log*/
const multiplos = document.getElementById("multiplos");
let a = 500;
let elias = 400;
for (let x = elias; x <= a; x += 3) {
  console.log(x);
}
