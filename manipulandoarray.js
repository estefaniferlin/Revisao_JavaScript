const livros = [ {"nome" : "CSS3", "ano" : 2020},     // array de objetos
                 {"nome" : "HTML5", "ano" : 2018},
                 {"nome" : "JavaScript", "ano" : 2022} 
];

// map: 
livros.map( (livro) => {  // fazer um map nos livros, que é percorrer o array dos livros, e cada valor achado é chamado de livro, e cada vez ele executa o que ta dentro das {}
    console.log("Nome: " + livro.nome + " Ano: " + livro.ano);
});

livros.map( (livro2, index) => {  // pego tambem o index, a posição que o valor está
    console.log("Indice: " + index + " Nome: " + livro2.nome + " Ano: " + livro2.ano);
});

// funcao para manipular obj jason
livros.map( (livro3, index) => {  // pego tambem o index, a posição que o valor está
    console.log("Indice: " + index +" : " + JSON.stringify(livro3)); // mostra como array no console
});

// filter - retorna outro array com o filtro que eu usei-
let livrosFiltrados = livros.filter( (livro) => livro.ano > 2019);// retorna quando o ano for > que 2019
console.log( " livros filtrados: " + JSON.stringify(livrosFiltrados));

// find
// posso fazer um find para extrair um dos objetos que estao no array (exemplo, extrair o livro css3) - retorna um único objeto, nao um array com o filter faz
let objeto = livros.find( (livro) => livro.nome === "CSS3"); // === é o operador de igualdade do js
console.log('Livro: ' + JSON.stringify(objeto)); // usa esse json para transformar em string e poder retornar o objeto
