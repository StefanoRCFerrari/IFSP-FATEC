var prompt = require("prompt-sync")();
var qtdMoe;
var qtdTent;
var indice = [];
var tentativa = [];

var acertos = 0; 

function menuInicial() {
    qtdMoe = prompt("Quantas moedas jogar? ");
    qtdTent = prompt("Permitir quantas tentativas? ");
}

function geraJogadas() {
    indice = []; 
    for (let i = 0; i < qtdMoe; i++) {
        let parametro = Number(Math.random());
        if (parametro < 0.5) {
            indice.push("Cara");
        } else {
            indice.push("Coroa");
        }
    }
    return indice;
}

function tentaPlayer() {
    tentativa = [];
    for (let i = 0; i < qtdMoe; i++) {
        let chute = prompt("Tentativa pra primeira moeda.")
        if (chute == "Cara") {
            tentativa.push("Cara");
        } else if (chute == "Coroa") {
            tentativa.push("Coroa");
        } else {
            console.log("Chute inválido")
        }
    }
    return tentativa;
}

function simulaTenta() {
    for (let cont = 1; cont <= qtdTent; cont++) {
        console.log(`\n--- Tentativa ${cont} de ${qtdTent} ---`);
        tentativa = tentaPlayer();
        acertos = 0;

        for (let comp = 0; comp < qtdMoe; comp++) {
            if (tentativa[comp] === indice[comp]) {
                acertos++;
            }
        }
        
        console.log(`Resultado da tentativa: ${tentativa.join(", ")}`);
        console.log(`Resposta correta:       ${indice.join(", ")}`);
        console.log(`Você acertou ${acertos} de ${qtdMoe} moedas.`);
        
        
        if (acertos == qtdMoe) {
            console.log("\nO simulador venceu!");
            return true;
        }
    }
    

    console.log("\nO simulador perdeu...");
    return false;
}

menuInicial();
geraJogadas();
simulaTenta();