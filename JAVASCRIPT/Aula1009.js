let num = 0
const numCont = document.getElementById("numeroContador")

function diminuir() {
    num--
    numCont.textContent = num
    }

function aumentar() {
    num++
    numCont.textContent = num
    }