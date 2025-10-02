//classe pessoa

class Pessoa{
    constructor(nome, email, tel, nascimento){
        this.nome = nome;
        this.email = email;
        this.tel = tel;
        this.nascimento = nascimento;
    }

    //método que exibe informações da pessoa
    // retornar uma string formatada
    imprimirInfo(){
        return `
            <strong>Nome:</strong> ${this.nome} <br>
            <strong>Email:</strong> ${this.email} <br>
            <strong>Telefone:</strong> ${this.tel || 'N/A'} <br>
            <strong>Data de nascimento:</strong> ${this.nascimento || 'N/A'} <br><br>
        `
    }
}

// Classe GerenciadorCadastros - controla os cadastros
class GerenciadorCadastros {
    constructor(elementoLista) {
        this.usuarios = [];
        this.listaDOM = elementoLista;
    }

    // adicionar um cadastro de Pessoa

    addPessoa(nome, email, tel, nascimento){
        // Cria um novo objeto da classe pessoa

        const novaPessoa = new Pessoa(nome, email, tel, nascimento);

        this.usuarios.push(novaPessoa);
    }

    mostrarNaTela(){
        this.listaDOM.innerHTML = ''

        for(let i = 0; i < this.usuarios.length; i++){
            const pessoa = this.usuarios[i];
            const novoli = document.createElement('li');

            //exibir infomação da pessoa 
            novoli.innerHTML = pessoa.imprimirInfo();

            this.listaDOM.appendChild(novoli);
        }
    }

}


// Lógica de controle do cadastro

// 1. Puxar os dados da lista de usuários
const listaUl = document.getElementById('listaUsuarios');

// Criar objeto gerenciador de cadastros
const gerenciador = new GerenciadorCadastros(listaUl);

//função cadastrar pessoas
function cadastrarPessoa(){
    const campoNome = document.getElementById('nome');
    const campoEmail = document.getElementById('email');
    const campoTel = document.getElementById('tel');
    const campoNascimento = document.getElementById('nascimento');

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const tel = campoTel.value.trim();
    const nascimento = campoNascimento.value.trim();

    //validação apenas nos campos obrigatórios
    if(nome === "" || email === ""){
        alert("Preencha os campos obrigatórios!!!");
    }else{
        gerenciador.addPessoa(nome, email, tel ,nascimento);
        gerenciador.mostrarNaTela();

        // Limpa o form
        campoNome.value = "";
        campoEmail.value = "";
        campoTel.value = "";
        campoNascimento.value = "";
    }

    return false; // Impede o envio do formulário (recarregar a página)
}

gerenciador.mostrarNaTela()

