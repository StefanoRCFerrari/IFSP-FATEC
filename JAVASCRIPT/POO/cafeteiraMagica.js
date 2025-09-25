class Cafateira{
    constructor(agua, graos){
        this.agua = agua;
        this.graos = graos;
    }

    #esquentarAgua(){
        console.log("Esquentando água a 90ºC...");
    }

    #moerGraos(){
        console.log("Moendo grãos do café");
    }

    fazerCafe(){
        this.agua ? this.#esquentarAgua() : console.log("Sem água. Coloque mais ");
        this.graos ?   this.#moerGraos() :console.log("Sem grãos. Coloque mais ");

        this.agua && this.graos ? console.log("Café pronto para servir") : console.log("Não foi possível concluir o café");
    }
}

const maq = new Cafateira(1, 1);
const maq2 = new Cafateira(0, 1);
const maq3 = new Cafateira(0, 0);

console.log("\n");
maq.fazerCafe();
console.log("\n");
maq2.fazerCafe();
console.log("\n");
maq3.fazerCafe();