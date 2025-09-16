const prompt = require("prompt-sync")()

let qtdTerm = parseInt(prompt("Quantos termos inserir?"))
let derivada = []

for (let contador = 1; contador <= qtdTerm; contador++)
{
    let coeficiente = Number(prompt(`Insira o coeficiente do ${contador}° termo: `))
    let expoente = Number(prompt(`Insira o expoente do ${contador}° termo: `))
    let novoCoef = Number(coeficiente*expoente)
    let novoExp = Number(expoente-1)
    let termoAtual = `${novoCoef}x^${novoExp}`
    derivada.push(termoAtual)
}

console.log(`Derivada: ${derivada}`)