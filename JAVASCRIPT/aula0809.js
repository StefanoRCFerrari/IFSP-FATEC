function isPar(num) {
    if (num%2 === 0)
        return true
    else
        return false
}

function maiuscula(texto) {
    return texto.toUpperCase()
}

function area(base = 1, altura = 1) {
    return (base*altura)
}

console.log(isPar(3))
console.log(isPar(4))
let mensagem = "Oi, eu sou o Goku!"
console.log(maiuscula(mensagem))
console.log(area(2, 4))