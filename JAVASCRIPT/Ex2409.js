const prompt = require("prompt-sync")()

class ControleRemoto{
     

    constructor (nome, estado, canal, temperatura, volume){
    this.nome = nome
    this.estado = estado
    this.canal = canal
    this.temperatura = temperatura
    this.volume = volume
    }

    ligar(){
        if (this.estado === "Desligado"){
            this.estado = "Ligado"
            console.log(`${this.nome} ligado com sucesso!`)
            }
        else
            console.log(`${this.nome} já está ligado!`)
    }

    desligar(){
        if (this.estado === "Ligado"){
            this.estado = "Desligado"
            console.log(`${this.nome} desligado com sucesso!`)
            }
        else
            console.log(`${this.nome} já está desligado!`)
    }

    aumVol(){
        if (this.estado === "Ligado"){    
            if (this.nome === "TV" && this.volume < 100 || this.nome === "Som" && this.volume < 100){
                this.volume++
                console.log(`O volume de ${this.nome} foi aumentado para ${this.volume}`)
            }
            else if (this.nome === "TV" && this.volume === 100 || this.nome === "Som" && this.volume === 100){
                console.log(`O volume de ${this.nome} já está no máximo!`)
            }
            else
                console.log(`${this.nome} não emite sons!`)
            
            }
        else
            console.log("Não é possível interagir com um aparelho desligado")
        }


    dimVol(){
        if (this.estado === "Ligado"){
            if (this.nome === "TV" && this.volume > 0 || this.nome === "Som" && this.volume > 0){
                this.volume--
                console.log(`O volume de ${this.nome} foi reduzido para ${this.volume}`)
            }
            else if (this.nome === "TV" && this.volume === 0 || this.nome === "Som" && this.volume === 0){
                console.log(`O volume de ${this.nome} já está no mínimo!`)
            }
            else
                console.log(`${this.nome} não emite sons!`)
            }
        else
            console.log("Não é possível interagir com um aparelho desligado") 
        }

    aumTemp(){
        if (this.estado === "Ligado"){
            if (this.nome === "Ar" &&  this.temperatura < 30){
                this.temperatura++
                console.log(`Temperatura aumentada para ${this.temperatura}`)
            }
            else if (this.nome === "Ar" && this.temperatura === 30){
                console.log(`A temperatura já está no máximo!`)
            }
            else
                console.log(`${this.nome} não possui controle de temperatura!`)
            }
        else
           console.log("Não é possível interagir com um aparelho desligado") 
        }


    dimTemp(){
        if (this.estado === "Ligado"){
            if (this.nome === "Ar" &&  this.temperatura > 15){
                this.temperatura--
                console.log(`Temperatura reduzida para ${this.temperatura}`)
            }
            else if (this.nome === "Ar" && this.temperatura === 15){
                console.log(`A temperatura já está no mínimo!`)
            }
            else
                console.log(`${this.nome} não possui controle de temperatura!`)
            }
        else
            console.log("Não é possível interagir com um aparelho desligado")
        }

    trocaCanal(){
        if (this.estado === "Ligado"){
            if(this.nome === "TV"){
                this.canal = prompt("Qual o novo canal?")
                console.log(`Mudando para o canal ${this.canal}`)}
            else
                console.log(`Não é possível mudar o canal de um ${this.nome}`)
            }
        else
            console.log("Não é possível interagir com um aparelho desligado")
    }

}

const tv = new ControleRemoto("TV", "Desligado", 34, null, 0)
const som = new ControleRemoto("Som", "Desligado", null, null, 0)
const ar = new ControleRemoto("Ar", "Desligado", null, 15, null)