// Verbo + Substantivo

let corSite = "Azul";
function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor("Verde", "Escuro");
console.log(corSite);


// Exercício 1 - function

let tamAltura = "100px";
function resetaTam(altura, largura, espessura){
    tamAltura = altura + ', ' + largura + ', ' + espessura;
};

console.log(tamAltura);
resetaTam("100px", "200px", "5px");
console.log(tamAltura);