/* crie um programa que receba um numero de 0 a 6 e identifique qual é a bucha de domino */
const situacao = document.getElementById("resultado")
let resultado
let ladoA = 5
let ladoB = 5

if (ladoA == ladoB) {
    
 if(ladoA == "0" && ladoB == "0")
        {resultado = "branco"}
        else if(ladoA == "1" && ladoB == "1")
            {resultado = "as"}
        else if(ladoA == "2" && ladoB == "2")
            {resultado = "duque"}
        else if(ladoA == "3" && ladoB == "3")
            {resultado = "terno"}
        else if(ladoA == "4" && ladoB == "4")
            {resultado = "quadra"}
        else if(ladoA == "5")
            {resultado = "quina"}
        else if(ladoA == "6" && ladoB == "6")
            {resultado = "sena"}
        else {
            resultado = "n é peça domino"
        }
    
}
else{
    resultado = "n bucha"
}
situacao.innerHTML = resultado 