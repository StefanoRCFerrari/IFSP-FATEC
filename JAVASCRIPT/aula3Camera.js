//arryas (vetores), com dicionários

let musicas = [
    {
        "nome": "Surperman",
        autor: "Eminem",
        ano: 2022,
        midia: ["cd", "dvd", "disket", "Spotfy", "Dezzer"],
    },
    {
        nome: "Baby",
        autor: "Justin-biber",
        ano: 2019,
        midia: ["dvd", "Spotfy", "Dezzer"],
    }
];

console.log(musicas);
console.log(musicas[1]);
console.log(musicas[1].midia); //acessando o array dentro do dic
console.log(musicas[0].nome); //acessando o array dentro do dic
console.log(musicas.length);
console.log(typeof musicas);

musicas[3] = {
    nome: "Billie Jean",
    autor: "Michael Jackson",
    ano: 1983,
    midia: ["cd", "dvd", "disket", "Spotfy", "Dezzer"],
}

console.log(musicas);
console.log(musicas.length);
//ele deixa a posição 2 em branco criando apenas no 3.

//arrays:

let letras = ["b", "c", "e"];
console.log("\n\n+++++++++++++++++++++++++++++\n")
console.log(letras);
console.log(letras.length);
letras.push("f"); //coloca um valor ao final
console.log("\nvetor atualizado - push", letras);
console.log(letras.length);
letras.unshift("a"); //coloca um valor no começo
console.log("\nvetor atualizado - unshift", letras);
console.log(letras.length);

let letra = letras.pop(); //remove o último valor do vetor
//ele salva a letra removida na variável
console.log("\nvetor atualizado - pop", letras);
console.log("letra removida", letra);
console.log(letras.length);

let letr = letras.shift(); //remove o primeiro valor do vetor
//ele salva a letra removida na variável
console.log("\nvetor atualizado - shift", letras);
console.log("letra removida", letr);
console.log(letras.length);

//concatenação de arrays
console.log("\n\n+++++++++++++++++++++++++++++\n");

let vegetais = ["Tomate", "Berinjela", "alface", "brocolis"];
let prod = ["Coca", "pão", "letas", "Vassouras"];
let mercado = vegetais.concat(prod); //junta os items da primeira com a segunda
console.log("vegetais: ", vegetais);
console.log("produtos: ", prod);
console.log("Concat - Mercado: ", mercado);

//slice - fatia o trechos que deseja do vetor

let numeros = [-3,-2,-1, 1, 2, 3, 4, 5, 6, 7, 8];

console.log("\n\n+++++++++++++++++++++++++++++\n");
console.log(numeros);
console.log(numeros.slice(6,8));
console.log(numeros.slice(5,));
console.log(numeros.slice(-1));
console.log(numeros.slice(-3));
console.log(numeros.slice(0, 2));
//ele vai pega os numeros anterioes até a ultima posição desejesada
//ex: (1, 3), mostrará os valores das posições 1 e 2

//em valores -3 ele pega os valores das tres ultimas posições
