//sem usar desestruturacao
const livros = ["Java", "CSS", "HTML", "REACT"];
console.log(livros[0]); 
console.log(livros[1]);

// usando desestruturacao
let [java, css, html, react] = livros;
console.log(java);
console.log(react);

const livrosObjetos = [ {"nome" : "CSS3", "ano" : 2020}, 
                 {"nome" : "HTML5", "ano" : 2018},
                 {"nome" : "JavaScript", "ano" : 2022} 
];

let [l1, l2, l3] = livrosObjetos;
console.log(l1.nome); // joga no console para desestruturar

