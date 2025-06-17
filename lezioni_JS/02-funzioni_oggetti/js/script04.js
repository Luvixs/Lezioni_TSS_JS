//notazione lettereale

let studente = {
    nome: "Dario",
    cognome: "Mennillo",
    eta: 36,
    matricola: 123,

    //metodi
    superaEsame: function(){
        return "Bravo, hai superati l'esame"
    },

    presentati(){
        let presentazione = `ciao, mi chiamo ${this.nome} ${this.cognome} e ho ${this.eta} anni`
    
        return presentazione;
    }
}

console.log(studente.nome);
console.log(studente.presentati());
console.log(studente.superaEsame());

let motocilcetta = {
    marca: "",
    modello: "",
    cilindrata: "",

    marcia: 0,
    vel: 0,
    num_giri: 0,
    acceso: false,

    creaMoto(marca, modello, cilindrata){
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;
    },

    cambiaMarcia (marcia){
        this.marcia = marcia;
        return "sei alla marcia: " + this.marcia
    },

    calcoloVel(){
        this.vel = (this.num_giri * this.marcia) / 100;

        return `velocita attuale: ${this.vel}`;
    }

}

motocilcetta.creaMoto("kawasaki", "z750", 750);
motocilcetta.modifica_giri(4000);
motocilcetta.cambiaMarcia(3);
console.log();
console.log();


