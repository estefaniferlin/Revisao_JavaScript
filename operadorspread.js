// desestrutura os objetos para poder acessá-los
const livros1 = ["CSS3", "Java Script", "PHP"];
const livros2 = ["HTML5", "REACT"];

let livros = livros1 + livros2; // concatenou strings, nao consegui unir os arrays
console.log(livros1); // mostra no console no formato de array
console.log(livros2); // mostra no console no formato de array
console.log(livros); // vai mostrar como string e onde as variáveis se encontram, ficam com as informações grudadas

// para unir 2 objetos de forma correta, usamos o operador spread
let livrosUnidos = [...livros1, ...livros2]; // operador é ...
console.log(livrosUnidos); // mostra os livros unidos como um array

const precos = [50, 30, 70, 80, 35];
//let precoMaior = Math.max(precos);
//console.log("Maior: " + precoMaior); // vai retornar NaN

//forma certa de acessar os valores usando operador spread
let precoMaior = Math.max(...precos);
console.log("Maior: " + precoMaior);

const precosCombinados = [...precos, 120, 20, 150];
console.log("Preços: " + precosCombinados);

// o JS trabalha com o JSon
let objeto = {"codigo" : 12, "nome" : "Jorge"};
console.log(objeto);

// PAra alterar o valor do nome da variavel objeto (usaremos spread):
let objetoAlterado = {...objeto, "nome" : "João"}; // desse objeto, pegarei a propriedade nome e vou colocar outro nome
console.log(objetoAlterado);