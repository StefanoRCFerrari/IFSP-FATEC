let listaTelefonica = [
{
    nome: "Ana Flávia",
    telefone: "(16) 9 9247 3828",
    endereco: "Rua dos Alecrins 138",
    cep: "13032-180",
    email: "anaflavia@server.com"
},

{
    nome: "Baltazar",
    telefone: "(21) 9 9290 4678",
    endereco: "Rua General Osório 1332",
    cep: "13036-649",
    email: "contato.baltazar@servercomercial.com"
}
]

listaTelefonica[2] = {
    nome: "Cinthia",
    telefone: "(31) 9 9247 3839",
    endereco: "Avenida Monsenhor Laplace 152, Bloco 3, Apt 62",
    cep: "13031-120",
    email: "soares.cinthia@trendyserver.com"
}

listaTelefonica[3] = {
    nome: "Denilson",
    telefone: "(85) 9 9920 0029",
    endereco: "Estrada do Porto, Lote 13, casa 2",
    cep: "13049-240",
    email: "denilson.camisa9@futserver.com"
}

//.push e .pop; .unshift e .shift; tem Slice +-= Python

console.log(listaTelefonica);

animais = ['Macaco', 'Vaca', 'Golfinho', 'Arara', 'Galinha', 'Pinguim', 'Crocodilo', 'Cobra', 'Jacaré', 'Braquiossauro', 'Triceratops', 'Anquilossauro'],
ultimos3 = animais.slice(-3),
primeiros3 = animais.slice(0, 3),
excluiprimeiro = animais.slice(1, animais.length), //animais.unshift()
mamiferos = animais.slice(0, 3),
aves = animais.slice(3, 6),
repteis = animais.slice(6, 9),
dinossauros = animais.slice(9, animais.length)

console.log(animais) + console.log(animais.length) + console.log()
console.log(ultimos3) + console.log(ultimos3.length)
console.log(primeiros3) + console.log(primeiros3.length)
console.log(excluiprimeiro) + console.log(excluiprimeiro.length)
console.log(mamiferos) + console.log(mamiferos.length)
console.log(aves) + console.log(aves.length)
console.log(repteis) + console.log(repteis.length)
console.log(dinossauros) + console.log(dinossauros.length)


byebyedinos = animais.pop()
glubglub = animais.push('Tilapia', 'Traira')
console.log(animais)
finalform = animais.concat(glubglub) 
finalform = animais.unshift('Tartaruga')
finalform = animais.push('Elefante')
console.log(animais)
console.log(finalform)
console.log(`Tilapia na posição ${finalform.indexOf('Tilapia')}`)
