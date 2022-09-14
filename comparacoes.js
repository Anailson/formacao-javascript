
// == (comparação implicita)

const numero = 5;
const texto = "5";

console.log(numero == texto)
console.log(numero === texto); //comparando as variaveis numero e string (false)

//typeof
console.log(typeof numero);
console.log(typeof texto);

// == só compara o valor
// === comparar o valor e o tipo de dados - boas práticas é o mais adotado

// conver~sao explicita
Number()
String()