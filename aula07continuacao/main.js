// objetivo é retornalizar uma mensagem personalizada para o usuario
// dentro dos parenteses () vai os parametros da função
function fnMensagem(nome){
    console.log("Seja bem vindo " + nome + " ao sistema sandbox")
}

//objetivo: receber 2 numeros e somar os valores
//para passar + de 1 parametro eu separo eles por virgula
// E SE eu quiser passar +1 parametro que valide o "tipo de operação(+,-,*,/)"
function fnSoma(num1,num2, operador){
    let resultado = 0 
    if (operador == "soma"){
        resultado = num1 + num2
    } else if (operador == "subtrair"){
        resultado = num1 - num2
    }else if (operador == "multiplicar"){
        resultado = num1 * num2
    }else if ( operador == "dividir"){
        resultado = num1 / num2
    } else{
        // caso nenhum valor seja valido
        console.log("valor do operador invalido, calculo zerado!")
    }

    console.log("A soma dos valores: " + resultado)
}