class Pessoa{
    constructor(nome, email, telefone, nascimento){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.nascimento = nascimento;}

        exibirInfo(){
            return `
            <strong>Nome: </strong> ${this.nome}<br>
            <strong>E-Mail: </strong> ${this.email}<br>
            <strong>Telefone: </strong> ${this.telefone || 'N/A'}<br>
            <strong>Data De Nascimento: </strong> ${this.nascimento}<br>
            `
        }
    }


class GerenciadorCadastros{
    constructor(elementolista){
        this.usuarios = [];
        this.listaDOM = elementolista;
    }

    cadastrarPessoa(nome, email, telefone, nascimento){
        const novaPessoa = new Pessoa(nome, email, telefone, nascimento)
        this.usuarios.push(novaPessoa);
    }

    mostrarNaTela(){
        this.listaDOM.innerHTML = ''
        for (let i=0; i< this.usuarios.length; i++){
            const pessoa = this.usuarios[i];
            const novoLI = document.createElement('li');

            novoLI.innerHTML = pessoa.exibirInfo();

            this.listaDOM.appendChild(novoLI);
        }
    }
}

const listaUL = document.getElementById('lista-usuarios');
const gerente = new GerenciadorCadastros(listaUL);

function novoCadastro(){
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const inputTelefone = document.getElementById('telefone');
    const inputNasc = document.getElementById('nascimento');

    const nomeFormat = inputNome.value.trim();
    const emailFormat = inputEmail.value.trim();
    const telefoneFormat = inputTelefone.value.trim();
    const nascFormat = inputNasc.value.trim();

    inputNome.value = ''
    inputEmail.value = ''
    inputTelefone.value = ''
    inputNasc.value = ''

    gerente.cadastrarPessoa(nomeFormat, emailFormat, telefoneFormat, nascFormat);
    gerente.mostrarNaTela();

    return false;
}

gerente.mostrarNaTela();