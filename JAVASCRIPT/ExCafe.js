class Cafeteira{
    
    constructor(tipo){
        this.tipo = tipo}

    #aquecerAgua(){
        console.log("Aquecendo água a 90ºC")
    }

    #moerGraos(){
        console.log("Moendo grãos de café")
    }
    
    fazerCafe(tipo){
        this.#aquecerAgua()
        this.#moerGraos()
        console.log(`Café ${this.tipo} pronto para servir`)
    }

}

const cafezinho = new Cafeteira("Mocha")

cafezinho.fazerCafe()