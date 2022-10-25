//uma funcao normal
function ola(msg){
    console.log("Olá: " + msg);
}
ola("Usando função do ES5"); //emmascript 5


// função com arrow functions: função que nao precisa passar por declaração
const ola2 = () => {
    console.log("Aprendendo funções da ES6"); // declaro o nome = (aqui pode ter parametros que vou recever ) => e a função
}
ola2();

const ola3 = () => "Aprendendo funções da ES6"; 
console.log(ola2());


const somar = (num1, num2) => {
    let res = num1 + num2;
    console.log("Resultado: " + res);
}
somar(5.0, 6.0);
