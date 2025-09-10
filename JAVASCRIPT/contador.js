

let valor = 0;
const nCont = document.getElementById("nContador");

function diminuir(){
            valor = valor - 1;

            nCont.textContent = `${valor}`;
        }
        
function aumentar(){
            valor = valor + 1;

            nCont.textContent = `${valor}`;
        }