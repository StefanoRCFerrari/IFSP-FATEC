
const display =document.getElementById('display');
const buttonsContainer = document.querySelector('.buttons');

function handleInput(value){
    const currentText = display.textContent;

    if(value === 'C'){
        display.textContent = '0';
    }else if(value === '⌫'){
        if(currentText.length === 1 || currentText === 'Erro'){
            display.textContent = '0'
        }
        else{
            display.textContent = currentText.slice(0, -1)
        }
    }else if(value === '='){
        //calcula mas trata o erro
        try{
            let result = eval(currentText.replace('Erro', ''));
            display.textContent = result;
        }catch(error){
            display.textContent = "Erro";
        }
    }//numeros e operadores
    else{
        if((currentText === '0' && value != '.')){
            display.textContent = value;
        }else{
            display.textContent += value;
        }
    }
}

//EventListenner usado para tratar o click do mouse, fora ou dentro do container do botões
buttonsContainer.addEventListener('click', (event) => {
    if(!event.target.matches('button')){
        return;
    }

    const value = event.target.dataset.value;
    handleInput(value);
});

window.addEventListener('keydown', (event) => {
    const key = event.key;
    let value = null;

    //mapeamento de teclas
    if(key >= '0' && key <= '9'){
        value = key;
    }else if(key === '+' || key === '-' || key === '*' || key === '/' ){
        event.preventDefault();
        value = key;
    }else if(key === ',' || key === '.' ){
        value = '.';
    }else if(key  === 'Enter' || key === '='){
        event.preventDefault();
        value = key;
        value = '=';
    }else if(key === 'Escape'){
        value = 'C';
    }else if(key === 'Backspace'){
        value = 'Backspace';
    }
})