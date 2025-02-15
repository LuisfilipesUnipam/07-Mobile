function exibirDetalhesProduto(produto){
    return `Produto: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}, Estoque: ${produto.estoque} unidades.`
}

const wii = {
    nome: "Nintendo Wii",
    preco: 250.0,
    estoque: 1
}

console.log(exibirDetalhesProduto(wii))

// ForEach

const numeros = [10, 20, 30, 40, 50];
numeros.forEach(num => {
    console.log(`Número: ${num}`);
});

// Map

const dobrados = numeros.map(num => num * 2);
console.log(dobrados);

//Filter

const maiorQue30 = numeros.filter(num => num > 30);
console.log(maiorQue30);

// Find
const maiorQue40 = numeros.find(num => num > 40);
console.log(maiorQue40);

// Every 
const todosMaiores = numeros.every(num => num > 10);
console.log(todosMaiores);

// Some

const existeMaior = numeros.some(num => num > 41);
console.log(existeMaior);