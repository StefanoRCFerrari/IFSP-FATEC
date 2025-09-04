let fib1 = 1
console.log(fib1)
let fib2 = 1
console.log(fib2)
let prfib = 0

while (prfib < 555) {
    prfib = fib1 + fib2
    fib1 = fib2
    fib2 = prfib
    if (prfib < 555)
        console.log(prfib) }



let base = 7
let raiz = Math.ceil(Math.sqrt(base))
let divs = 0
for (cont = 2; cont <= raiz; cont++)
{
    if (base%cont === 0)
    {
        divs += 1
    }
}

if (divs)
    console.log("Não é primo")
else
    console.log("É primo")





primos = [2]
for (num = 3; num <= 1000; num += 2)
{
    let raiz = Math.ceil(Math.sqrt(num))
    let divs = 0
    for (cont = 2; cont <= raiz; cont++)
    {
        if (num%cont === 0)
        {
            divs += 1
        }
    }

    if (divs)
        continue
    else
        primos.push(num)
}

console.log(primos)