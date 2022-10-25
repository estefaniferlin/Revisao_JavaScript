const livro = "Meu l\
ivro";  // para interpretar a quebra de linha
console.log(livro);

const livro2 = 'Livro de "React"'



;  // template literals: consegue adicionar essa funcionalidade de pular linhas, usando ' ' para escrever e ai podemos usaer o " " nas palavras


// usando crase para adicionar valores que virao de outro lugar dentro da string
let str = `Minha string ${livro} `;
console.log(livro2);
console.log(str);

const preco = 156.00;
const mensagem = `O preço do livro ${livro} é R$ ${preco}!`;
console.log(mensagem);
