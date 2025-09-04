let pedido = "Sushi"

switch (pedido){

    case "Hamburger":
        console.log("Você pediu um Hamburger")
        break;

    case "Pizza":
        console.log("Você pediu uma Pizza")
        break;

    case "Hotdog":
        console.log("Você pediu um Hotdog")
        break;
    
    default:
        console.log("Não entendi seu pedido ou você não pediu nada...")
}

linhaAnterior = [1]
proximaLinha = [1, 1]

console.log(linhaAnterior)
console.log(proximaLinha)

for (cont = 3; cont <= 9; cont++) {
    linhaAnterior = proximaLinha
    proximaLinha = [1]
    let pos = 1;
    while (proximaLinha.length < linhaAnterior.length){
        proximaLinha.push(linhaAnterior[pos]+linhaAnterior[pos-1])
        pos++
    }
    proximaLinha.push(1)
    console.log(proximaLinha)}
