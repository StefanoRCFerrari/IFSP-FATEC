//Switch

const fruta = "laranja";
switch (fruta) {
    case "uva":
        console.log("Sua fruta para o lanche é uva");
        break;
    case "morango":
        console.log("Sua fruta para o lanche é morango");
        break;
    case "LARANJA":
    case "laranja":
        console.log("Sua fruta para o lanche é laranja");
        break;
    default:
        console.log("Não há frutas para o lanche");
}

//Operador Ternário -

let condicao = true;

condicao ? console.log("Condição é verdadeira!!") : console.log ("Condição é falsa!!");

10 > 22 ? console.log("10 é maior") : console.log("10 não é maior");

//exercícios: 

let podeDirigir;
let idade = 18;

idade > 17 ? podeDirigir ="SIM" : podeDirigir = "NÃO";

let estaSol = true;
let temGuardaChuva = false;

estaSol || temGuardaChuva ? console.log("Pode sair!!") : console.log("Não pode sair!!");

let cond = 0 === false;

console.log("0 === false = ", cond);


//biblioteca Math
let num = -6.25;
let num2 = 3
console.log(Math.abs(num)); //valor absoluto
console.log(Math.ceil(num));  //arredonda para cima
console.log(Math.floor(num)); //arredonda para baixo
console.log(Math.round(num));  //para n inteiro mais prox
console.log(Math.pow(num2, 3));  //base elavado ao exp
console.log(Math.sqrt(num2)); //raiz quadrada

console.log("\nRandom");
                //[0,1[
console.log(Math.random());


                            //intervalo + 1 inclui o maximo      
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numero = gerarNumeroAleatorio(0, 10);
console.log(numero); // Exemplo: 7


//sort e reverse

let numeros = [7, 3, 34, 66, 2, 76, 77, 33, 67, 1, 87];

console.log(numeros.sort()); //array em ordem crescente ou alfabética
console.log(numeros.reverse()); //inverte as posições

//funçoes

soma(1,2); // - independende do lugar a onde a função foi declarada

//somar(3,4); - essa só pode ser usada abaixo da sua inicialização

function soma(a,b){
    console.log(a+b);
    return
}

const somar = function(a,b){
    console.log(a+b);
};

somar(3,4);


const mult = (a,b) =>{
    return (a*b);
};

const dividir = (a, b) => a/b;


