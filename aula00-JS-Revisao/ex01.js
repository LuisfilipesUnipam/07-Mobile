// Problema de escopo de variáveis

var nome = "Joaquim";

if(true){
    var nome = "Josicley";
    console.log(nome);
}

console.log(nome);