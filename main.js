const situacao = document.getElementById("aprovado")
let resultado
let nota = 7
let faltas = 20
if (nota>=7 && faltas <= 20) {
    resultado = "aprovado"
    
} else {
    resultado = "reprovado"

    
}
situacao.innerHTML = resultado