let secreta = "PERNA"
let vidas = 6

function chute(){
    const chute = document.getElementById('palpite')
    const resposta = chute.value.toUpperCase();
    const contador = document.getElementById('contador')

    if (resposta.length !== 5){
        alert("Chute curto demais!!!")
        return;
    }

    let resultado = ""

    for (let count = 0; count < 5; count++){
        if (resposta[count] == secreta[count])
            resultado += `<span class="correta">${resposta[count]}`
        else if (secreta.includes(resposta[count]))
            resultado += `<span class="parcial">${resposta[count]}`
        else
            resultado += `<span class="errada">${resposta[count]}`
    }
    registros.innerHTML +=`<div class="tentativa">${resultado}</div>`;
    vidas--;
    contador.textContent = "Tentativas Restantes: " + vidas;

    if (resposta === secreta) {
        alert("Parabéns! Você acertou!");
    } else if (vidas === 0) {
        alert("Fim de jogo! A palavra era: " + secreta);
    }
}

document.getElementById('chutar').addEventListener('click', chute);