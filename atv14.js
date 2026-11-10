/* 
Se o email tiver vazio, ao inves dele retorna que é verdade
ele vai falar que é mentira ai vai pro else, se o email não estiver vazio
ai ele vai falar que é verdade e vai rodar o console.log("Formulário válido")
*/
var email = "a"
var termos = true

if(email != "" && termos == true){
    console.log("Formulário válido")
}else console.log("Formulário inválido")