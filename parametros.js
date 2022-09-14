

// parametros x argumentos

//ordem dos parametros

function nomeIdade(nome, idade){
     return `meu nome é ${nome} e minha idade é ${idade}`;
}
//console.log(nomeIdade("Anailson", 38));


//parametros de função
function soma(numero1, numero2){
     return numero1 + numero2;
}

/*console.log(soma(2,2));
console.log(soma(220,200));
console.log(soma(-500,60));*/


function multplica(numero1 = 1, numero2 = 1){
     return numero1 * numero2;
}
//console.log(multplica(soma(4,5), soma(3,3)));
console.log(multplica(soma(4,5)));