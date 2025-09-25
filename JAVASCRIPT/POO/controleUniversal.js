class ControleUniversal{
    constructor(aparelho, volume, estado){
        this.aparelho = aparelho;
        this.volume = volume;
        this.estado = estado;
    }

    ligar(){
        console.log(this.aparelho, ": Aparelho ligado!!");
    }

    desligar(){
        console.log(this.aparelho,": Aparelho desligado!!");
    }

    aumentarVolume(){
        if(this.volume < 100){
            this.volume++;
            console.log(this.aparelho,": Volume aumentando: ", this.volume);}
        else
            console.log(this.aparelho,": Volume no máximo: ", this.volume);
    }

    diminuirVolume(volume){
        console.log(this.aparelho,": Volume diminuindo: ", volume-1);
    }

    trocarCanal(canal){
        console.log(this.aparelho, `: Trocando para canal: ${canal}`);
    }


}

const tv = new ControleUniversal("tv");

tv.ligar();

tv.desligar();

tv.aumentarVolume(12);
tv.aumentarVolume(20);

tv.trocarCanal(12);

