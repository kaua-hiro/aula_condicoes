/* um programa só aceita pessoas se cadastrarem se a mesma tiver 1.85m+ */
const situacao = document.getElementById("cradastramento")
let cadastro
let altura_permitida = 1.85
let altura_digitada = 1.85
if (altura_digitada >= altura_permitida) {
    cadastro = "permitido"
    
} else {
    cadastro = "negado"
    
}
situacao.innerHTML = cadastro
