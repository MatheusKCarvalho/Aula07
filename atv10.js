var valorCompra = 100
var membroVip = false
var zonaRural = false

if((valorCompra > 100 || membroVip == true) && !zonaRural){
    console.log("Frete gratis")
}else{
    console.log("Sem frete gratis")
}

