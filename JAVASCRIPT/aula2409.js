class Card{
    #price
    #collection

    constructor(cardname, rarity, types, colors, manacost, power, tough, trigger, price, collection){
        this.cardname = cardname
        this.rarity = rarity
        this.types = types
        this.colors = colors
        this.manacost = manacost
        this.power = power
        this.tough = tough
        this.trigger = trigger
        this.#price = price
        this.#collection = collection
    }

    detail(){
        console.log(`\n${this.cardname} is a ${this.rarity} ${this.colors} ${this.types} with mana cost ${this.manacost}, ${this.power} power and ${this.tough} toughness. Its triggered abilites are: ${this.trigger}`)
        if (!this.#pauper()){
            console.log(`${this.cardname} is not allowed in Pauper Decks!`)
        }
    }

    #pauper(){
        return (this.rarity === "Common")
    }
}

const nighthawk = new Card("Vampire Nighthawk", "Uncommon", "Creature - Vampire Shaman", "Black", "3 - (1BB)", 2, 3, "Flying, Deathtouch, Lifelink", 0.12, "Zendikar")
const falkenrathM = new Card("Falkenrath Marauders", "Rare", "Creature - Vampire Warrior", "Red", "5- (3RR)", 2, 2, "Flying, Haste", 0.25, "Innistrad")
const qasaliAmb = new Card("Qasali Ambusher", "Uncommon","Creature - Cat Warrior", "White/Green", "3 - (1WG)", 2, 3, "Reach", 0.36, "Shards Of Alara")
const pulseTra = new Card("Pulse Tracker", "Common", "Creature - Vampire Rogue", "Black", "1 - (B)", 1, 1, "None", 0.10, "Worldwake")


nighthawk.detail()
falkenrathM.detail()
qasaliAmb.detail()
pulseTra.detail()