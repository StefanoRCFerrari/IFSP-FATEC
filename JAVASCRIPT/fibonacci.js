let qtdDig = prompt("Quantos digitos?")
    while (parseInt(qtdDig) < 1 || isNaN(parseInt(qtdDig)) || parseInt(qtdDig) !== parseFloat(qtdDig))
        qtdDig = prompt("Input Inválido. Quantos digitos?")

qtdDig = parseInt(qtdDig)

let fibo1 = 1
let fibo2 = 1
let proxfibo = fibo1 + fibo2

if (qtdDig == 1)
    document.write(fibo1)
else if (qtdDig == 2)
    document.write(`${fibo1}<br>${fibo2}`)
else 
{    
    document.write(`${fibo1}<br>${fibo2}<br>`)
    for (let count = 2; count < qtdDig; count++)
    {
        document.write(`${proxfibo}<br>`)
        fibo1 = fibo2
        fibo2 = proxfibo
        proxfibo = fibo1 + fibo2
    }
}