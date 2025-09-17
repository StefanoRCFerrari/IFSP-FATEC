
function contaVogal(frase){
    let quantidade = 0
    const vogais = "aeiouAEIOUáàÁÀâÂãÃêÊéÉîÎíÍóÓôÔõÕúÚûÛüÜ"
    for (let contador = 0; contador < vogais.length; contador++){ 
        for (let contador2 = 0; contador2 < frase.length; contador2++){
            if (frase[contador2] == vogais[contador])
                quantidade++
        }
    }

    console.log(`Há ${quantidade} vogais na sua frase.`)
}

contaVogal("Olá, senhoras e senhores estudantes do magnânimo universo da tecnologia. Como estão vossas mercês? Quero ver qual de vocês, nobres usuários, virá a ser paciente o bastante pra realmente contar e conferir manualmente a quantidade correta de vogais neste texto desnecessariamente longo. Desejo ardentemente toda a boa sorte do mundo ao bravo aventureiro que quiser REALMENTE se gabar de ter feito tal trabalho braçal a troco de absolutamente nada, a não ser a mais pura, simples e primal massagem no próprio ego. Parabéns, você conseguiu até mesmo chegar à quinta frase desta string absurda. Está feliz agora? Provavelmente não, afinal, ninguém que é REALMENTE feliz perderia tanto tempo assim com uma besteira dessas. Enfim, já estou ficando sem criatividade pra escrever essa string e espero que você também esteja ficando sem paciência pra contar as vogais, caso contrário, ficarei genuinamente preocupado com a sua sanidade e recomendar-lhe-ei veementemente auxílio psicológico profissional, quiçá auxílio psiquiátrico. Boas lonjuras, meus pequenos, e que a força esteja com vocês. Adios.")




function palindromo(palavra){
    
    let palindromo = true
    for (let contador = 0, contador2 = (palavra.length)-1; contador < palavra.length && contador2 >= 0; contador++, contador2--){ 
            if (palavra[contador] !== palavra[contador2])
                palindromo = false
    }
    if (palindromo)
        console.log(`${palavra} é palíndromo`)
    else
        console.log(`${palavra} não é palíndromo`)
}

palindromo("arara")
palindromo("ovo")
palindromo("osso")
palindromo("casa")
palindromo("rato")
palindromo("asa")
palindromo("ana")

function formataAula(argumento){
    let novoargumento = ""
    
    for (let contador = 0; contador < argumento.length; contador++)
    {
        if (novoargumento.length == 0 && argumento[contador] == " ")
            continue
        else if (novoargumento.length == 0)
            novoargumento += argumento[contador].toUpperCase()
        else if (argumento[contador-1] === " " && argumento[contador] !== " ")
            novoargumento += argumento[contador].toUpperCase()
        else if (argumento[contador-1] !== " ")
            novoargumento += argumento[contador].toLowerCase()
        
    }
    console.log(`${novoargumento}`)
}

formataAula("tESte nÚmERO Um")
formataAula("       tESTE nÚMERO dOIS")
formataAula("          teSTe             nÚmero  trêS")
formataAula("   tEsTe    NúMeRo      qUatRo         ")
