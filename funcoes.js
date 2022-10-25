const ola = () => {
    console.log("Usei a função olá")
}

const saida = (texto) => {
    console.log("Usei a função de saída: " + texto)
}

module.exports = {ola, saida}  // funcoes que quero exportar (em java nós chamávamos elas nas classes, aqui temos que fazer um export delas no lugar onde vamos usar)
//temos que ter um arquivo para usar essa fduncoes, sera usandofuncoes.js