const fs = require('fs'); // usado para fazer leituras
const { resolve } = require('path');

console.log(1);

//funcao de callback: utilizadas quando vou executar algo mas nao de forma sincrona, ele permite que execute o restante das funções enquanato uma delas está ainda sendo executada pois precisa de algo que demora mais tempo para finalizar
/*const callback = (err, contents) => {  // estará associada ao final system (fs) que sempre estará ligada a erro ou conteudo 
    console.log(err, String(contents))
}

fs.readFile('./nomes.txt', callback) // passar o arquivo e uma função de callback (executada após o processamento do arquivo nomes.txt)
*/

fs.readFile('./nomes.txt', (err, contents) => {  // posso fazer no exemplo acima criando uma arrow function e dps usando ela, ou dessa foirma que ja faz a função ali dentro
    console.log(err, String(contents));
    if (err){
        console.log("Erro: " + err)
    } else {
        console.log(String(contents))
    }
})

console.log(2);

// exemplo com promise
const readFile = file => new Promise ( (resolve, reject ) => {  // pode ser resoolvida ou rejeitada
    fs.readFile(file, (err, contents) => {
        if (err){
            reject  // rejeito a promessa
        } else {
            resolve(contents) // resolvo a promessa
        }
    })
})

// para chamar a promessa // usar e nao usar promessas: fetch retorna promise, entao estamos ja vendo como utilizar ele
readFile('./nomes.txt').then(contents => {  // quando for executada a funcao read, vou executar algo (quando encontra conteudo)
    console.log(String(contents)) 
}).catch(err => console.log("Erro: " + err)) // quando passar uma funcao errada, exemplo escrever names inves de nomes, ele mostra er (quando rejeita a promise)

// posso criar uma funcao assincrona - que fica pausando um processamento
const leitura = async (file) => { 
    const contents = await readFile(file)  // a exeução da função async vai ficar oayusada ate que o await retorna algo
    console.log(String(contents))
}

leitura('./nomes.txt');

console.log(3);
console.log(4);