class Animal{
    constructor(nome){
        this.nome = nome;
    }

    comer() {
        console.log(`${this.nome} esta comendo`);
    }
    baulho() {
        console.log(`${this.nome} esta fazendo barulho`);
    }
}

class Cachorro extends Animal{
    constructor(nome, raca){
        super(nome);
        this.raca = raca;
    }

    barulho(){
        console.log(`${this.nome} esta latindo:Au-Au`);
    }
    buscar(){
        console.log(`${this.nome} busca bolinha`);
    }
}

class Gato extends Animal{
    constructor(nome, raca){
        super(nome);
        this.raca = raca;
    }

    barulho(){
        console.log(`${this.nome} esta miando:Miauuuuuuuuuuuuuuuuuuuuuuuuuuu`);
    }
}

const cao = new Cachorro("bilu", "golden");

cao.barulho();
cao.comer();

const gato = new Gato("xanin", "malhado");

gato.barulho();
gato.comer();