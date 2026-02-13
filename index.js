
class hero{
    constructor(nameHero, idadeHero, tipohero, ataqueHero){
        this.nameHero = nameHero
        this.idadeHero = idadeHero
        this.tipohero = tipohero
        this.ataqueHero = ataqueHero

    }

    texto(){
        console.log(`O nickname do jogador é ${this.nameHero} ele tem ${this.idadeHero} e é do tipo ${this.tipohero}`)
        console.log(`O ${this.tipohero} ${this.nameHero} atacou o guerreiro hogbat usando ${this.ataqueHero}`)
    }

}

let informacoes = new hero ("devorador", "29 anos", "mago", "magia")

informacoes.texto()

class heroinimigo{
    constructor(nameHeroi, idadeHeroi, tipoheroi, ataqueHeroi){
        this.nameHeroi = nameHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoheroi = tipoheroi
        this.ataqueHeroi = ataqueHeroi


    }

    textos(){
        console.log(`O nickname do jogador é ${this.nameHeroi} ele tem ${this.idadeHeroi} e é do tipo ${this.tipoheroi}`)
        console.log(`O ${this.tipoheroi} ${this.nameHeroi} contra-atacou o mago devorador usando um poderoso golpe de ${this.ataqueHeroi}`)
    }

}

let informacoes1 = new heroinimigo ("hogbat", "21 anos", "guerreiro", "espada")

informacoes1.textos()