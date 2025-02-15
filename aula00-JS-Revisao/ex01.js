// Problema de escopo de variáveis

var nome = "Joaquim";
console.log(nome)

if(true){
    var nome = "Josicley";
    console.log(nome);
}

nome = 23
console.log(nome);

// Let

let idade = 23;
console.log(idade);

if(true){
    let idade = 12
    console.log(idade);
}

idade = "Josicley"
console.log(idade);

// Const

const PI = 3.14;
console.log(PI);

if(true){
    const PI = 3;
    console.log(PI);
}
