var valor1 = 10
var valor2 = 85
var valor3 = 15

if (valor1 > valor2 && valor1 > valor3) {
    console.log("O valor 1 é maior: ", valor1); 
}

if (valor2 > valor1 && valor2 > valor3) {
    console.log("O valor 2 é maior: ", valor2);
}

if (valor3 > valor1 && valor3 > valor2) {
    console.log("O valor 3 é maior: ", valor3);
}

//2. faça um programa que leia um numero  e verifique se ele está entre 1 e 100

var numero = 100

if (numero >= 1 && numero <= 100){
    console.log("O numero escolhido esta entre 1 e 100")
}else{
    console.log("O numero escolhido não esta entre 1 e 100")
}

//3. crie um programa que leia letra e retorne se é vogal ou consoante

var letra = "b"

if(letra == a || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    console.log("A letra escolhida é vogal!")
}else console.log("A letra escolhida é consoante!")

//4 faça um programa que leia um numero e verifique se ele esta fora do range de 1 a 20

var numero = 4

if(numero < 1 || numero > 20){
    console.log("você esta fora do range")
}else{
    console.log("voce está dentro do range")
}