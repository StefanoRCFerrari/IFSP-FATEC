class Animal{
    constructor(nome){
        this.nome = nome;
    }

    comer(){
        console.log(`${this.nome} está comendo`)
    }

    barulho(){
        console.log(`${this.nome} está fazendo barulho`)
    }
}

class Cachorro extends Animal{
    constructor(nome, raca){
        super(nome);
        this.raca = raca;
    }

    barulho(){
        console.log(`${this.nome} está latindo`)
    }

    guarda(){
        console.log(`${this.nome} está de guarda!`)
    }
}



const meuCao = new Cachorro ("Umbra", "Dobermann");

meuCao.barulho();
meuCao.comer();
meuCao.guarda();