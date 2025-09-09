var prompt = require("prompt-sync")();
var qtdMoe;
var qtdTent;
var indice = [];
var tentativa = [];

var acertos = 0; 

function menuInicial() { //Inicia o game com a quantidade de moedas e tentativas
    qtdMoe = prompt("Quantas moedas jogar? ");
    qtdTent = prompt("Permitir quantas tentativas? ");
}

function geraJogadas() { //Gera a "sequência correta", que precisa ser advinhada pelo jogador para vencer
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

function tentaPlayer() { //Permite que os jogadores façam seus "chutes"
    tentativa = [];
    for (let i = 0; i < qtdMoe; i++) {
        let chute = prompt(`Tentativa pra ${i+1}ª moeda.`)
        if (chute == "Cara") {
            tentativa.push("Cara");
        } else if (chute == "Coroa") {
            tentativa.push("Coroa");
        } else { //Evita que qualquer coisa diferente de "Cara" e "Coroa" seja considerada como um chute e pede um novo input para o mesmo "número de tentativa"
            console.log("Chute inválido")
            i--
        }
    }
    return tentativa;
}

function simulaTenta() { //Mostra em que tentativa estamos e quais moedas o jogador acertou nessa tentativa
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
        console.log(`Você acertou ${acertos} de ${qtdMoe} moedas.`);
        
        
        if (acertos == qtdMoe) { //Interrompe o jogo caso o jogador vença
            console.log("\nVocê venceu!");
            return true;
        }
    }
    

    console.log("\nVocê perdeu...");//Game Over
    return false;
}


//Chamados das funções corretas
menuInicial();
geraJogadas();
simulaTenta();
console.log(`Resposta correta:       ${indice.join(", ")}`);//"Gabarito" ao final