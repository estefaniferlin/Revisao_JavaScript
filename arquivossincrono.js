// manipular arquivos de forma sincrona
const fs = require('fs')

const livros = [ {"nome" : "CSS3", "ano" : 2020}, 
                        {"nome" : "HTML5", "ano" : 2018},
                        {"nome" : "JavaScript", "ano" : 2022} 
];

console.log(livros); // mostra array no formato de objetos

let arquivo = "meuarquivo.txt"

fs.writeFileSync(arquivo, JSON.stringify(livros)) // gravar o lkivrosObjetos em forma de string no arquivo

dadosArquivo = fs.readFileSync(arquivo).toString('UTF8')

console.log(dadosArquivo) // mostra como se fosse uma string gigante, e nao um array de objetos que podem ser manipulador, entao quando faco essa leitura preciso usar parse

// transformando em objeto de novo:
dadosJSON = JSON.parse(dadosArquivo) // fazemos assim para poder manipular os dados
console.log(dadosJSON)
console.log(JSON.stringify(dadosJSON))