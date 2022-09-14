

function apresentar(nome){
    return `meu nome é ${nome}`;

}

//Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1 , num2) => num1 + num2;

//arrow function com mais de 1 linha de instrução

const somaNumrosPequenos =  (num1, num2) =>{
    if (num1 > 10 || num2 > 10){
        return "somente números de 1 a 9"
    }else{
        return num1 + num2;
    }
}

console.log(somaNumrosPequenos(8,5))