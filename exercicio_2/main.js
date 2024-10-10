const situacao = document.getElementById("permitido");
/* Crie um programa que simula um sistema de segurança de um banco. O sistema deve permitir a entrada apenas se o usuário apresentar um nome válido e
 fornecer a senha correta. Use a tabela verdade para representar todas as combinações possíveis dessas condições e determine se o acesso deve ser permitido ou não. */
let resposta;
let senha_correta = "umdoistres";
let nomecorreto_do_usuario = "hiro";
let senha_digitada = "umdoistres";
let usuario_digitado = "hiro";
if (
  usuario_digitado == nomecorreto_do_usuario &&
  senha_digitada == senha_correta
) {
  resposta = "permitido";
} else {
  resposta = "bloqueado";
}
situacao.innerHTML = resposta;
