var nome = "Stéfano"
var idade = 33
console.log(`Olá! Me chamo ${nome} e tenho ${idade} anos.`)

var num1 = 7
var num2 = 5

console.log(`Soma: ${num1 + num2}  Subtração: ${num1 - num2}    Produto: ${num1 * num2}    Divisão ${num1/num2}`)

var idade2 = 33
if (idade >= 18){
    console.log("Maior de idade")
}
else
    console.log("Menor de idade")

for (cont = 1; cont <= 10; cont++)
    console.log(`${cont}`)


asteriscos = ["*"]
texto = ""
for (cont = 1; cont <= 5; cont++) {
    texto = asteriscos.join('')
    console.log(`${texto}`)
    asteriscos.push("*")
}

asteriscos = [" ", " ", " ", " ", "*"]
texto = ""
for (cont = 1; cont <= 5; cont++) {
    texto = asteriscos.join('')
    console.log(`${texto}`)
    asteriscos.push("*")
    asteriscos.shift()
}

asteriscos = ["*", "*", "*", "*", "*"]
texto = ""
for (cont = 1; cont <= 5; cont++) {
    texto = asteriscos.join('')
    console.log(`${texto}`)
    asteriscos.pop()
}

asteriscos = ["*", "*", "*", "*", "*"]
texto = ""
for (cont = 1; cont <= 5; cont++) {
    texto = asteriscos.join('')
    console.log(`${texto}`)
    asteriscos.pop()
    asteriscos.unshift(" ")
}


var num3 = 1

for (cont = 1; cont <= 8; cont++)
{
    vetor = []
    linha = parseInt(cont)
    for (cont2 = 1; cont2 <= linha; cont2++)
    {   
        vetor.push(num3)
        vetor.push(" ")
        num3 += 1
    }
    vetor.pop()
    
    while (vetor.length < 15)
    {
        vetor.push(" ")
        vetor.unshift(" ")
    }

    texto2 = vetor.join('')
    console.log(`${texto2}`)
}




for (cont = 1; cont <= 8; cont++)
{
    vetor = []
    linha = parseInt(cont)
    for (cont2 = 1; cont2 <= linha; cont2++)
    {   
        vetor.push(1)
        vetor.push(" ")
    }
    vetor.pop()
    
    while (vetor.length < 15)
    {
        vetor.push(" ")
        vetor.unshift(" ")
    }

    texto2 = vetor.join('')
    console.log(`${texto2}`)
}