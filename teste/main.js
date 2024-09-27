/* criar um programa que identifique uma bucha */
const situacao = document.getElementById("bucha")
let x
let lado1 = 6
let lado2 = 6
if (lado1 == lado2) {
    x = "BUCHA!"
    
} else {
    x = "n bucha"
    
}
situacao.innerHTML = x