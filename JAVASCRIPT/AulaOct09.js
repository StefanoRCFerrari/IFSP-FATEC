 let palindromo = true
    for (let contador = 0, contador2 = (palavra.length)-1; contador < palavra.length && contador2 >= 0; contador++, contador2--){ 
            if (palavra[contador] !== palavra[contador2])
                palindromo = false
    }
    if (palindromo)
        console.log(`${palavra} é palíndromo`)
    else
        console.log(`${palavra} não é palíndromo`)

    



//strOriginal -> cria pares invertidos e ímpares invertidos, decripta e compara com a original