
//Declarando a classe pessoa
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    //Métodos - aberto
    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }

    fazerAniversario(){
        this.idade++;
        console.log(`Feliz aniversário! Agora eu tenho ${this.idade} anos.`);
    }
}

//Criação do objeto 
const joao = new Pessoa("João", 30);

joao.apresentar();

joao.fazerAniversario();
joao.fazerAniversario();
joao.fazerAniversario();
joao.fazerAniversario();
joao.fazerAniversario();