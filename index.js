
class hero{
    constructor(nameHero, idadeHero, tipohero, ataqueHero){
        this.nameHero = nameHero
        this.idadeHero = idadeHero
        this.tipohero = tipohero
        this.ataqueHero = ataqueHero

    let poder = "magia"
        console.log("O " + this.nameHero + " atacou usando " + poder)
    }

    texto(){
        console.log(`O nickname do jogador é ${this.nameHero} ele tem ${this.idadeHero} e é do tipo ${this.tipohero}`)
        console.log(`O ${this.tipohero} ${this.nameHero} atacou o guerreiro hogbat usando ${this.ataqueHero}`)
    }

   
        

}

let informacoes = new hero ("devorador", "29 anos", "mago", "magia")

informacoes.texto()