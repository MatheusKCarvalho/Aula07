/*
a parte do ! é pq se for um caminhão eu quero que ele fale que é mentira,
para nao passar e dar que é vaga permitida, ent eu usei o ! pra inverter isso,
então se digitarem que é um caminhão ao inves de ser verdade, vai ser mentira
então ele vai pro else e fala que não é permitida
*/

var idade = 60
var credencial = false
var veiculo = "caminhao"

if((idade >= 60 || credencial == true) && veiculo !== "caminhao"){
    console.log("Está vaga é permitida")
}else console.log("Está vaga não é permitida")