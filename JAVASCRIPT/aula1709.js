



function countVogal (frase) {
    frase = frase.toLowerCase();

    let count = 0; 
    let vogais = "aeiou";

    for(let i = 0; i < vogais.length; i++){
        for(let j = 0; j < frase.length; j++){
            if(frase[j] == vogais[i])
                count++;
        }
    }

    return count;
}

let text = "Acessando valores usando a chave"

let qtd = countVogal(text)

console.log(`${qtd}`);
console.log(countVogal("Perdido por ai"));


function ehPalin (str){
    let m= 0, n=str.length - 1;
    let ind = false;

    while(m < str.length){
        if(str[m] == str[n]){
            ind = true;
        }else
            ind = false;

        m++;
        n--;
    }
    console.log( (ind) ? "É palindromo" : "Não é palindromo");
}


ehPalin("arara");
ehPalin("corida")
ehPalin("osso");
ehPalin("ata");


console.log("\n-----------------------------")

//"palavra teste"
function modFrase (str) {
    str = str.toLowerCase();

    let r = ""

    if(str[0] != " "){
        r += str[0].toUpperCase();
    }

    for(let i = 1; i < str.length; i++){
        if(str[i] != " "){
            r += str[i];
        }else if(str[i] == " "){
            while(str[i] === " " && i < str.length){
                r += str[i];
                i++;
            }
                r += str[i].toUpperCase();
        }

    }

    console.log(r);

}


modFrase("teste palavra                        c");
modFrase("     teste palavra");
modFrase("teste              palavra");
modFrase("            teste              palavra");

