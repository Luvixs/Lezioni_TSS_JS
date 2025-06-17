//oggetti con costruttore

class Studente {
    constructor(nome, cognome, eta, corsi, matricola, anno) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corsi = corsi;
        this.anno = anno;
        this.matricola = matricola;

        this.presenti = function () {
            let presentazione = `ciao, mi chiamo ${this.nome} ${this.cognome} e sono iscritto ai corsi di : ${this.corsi}. Matricola ${this.matricola}`;
        
            if(matricola != undefined){
                presentazione += ` Matricola ${this.matricola}`;
            }
        
            return presentazione;
        };
    }
}

let mioStudente = new Studente ("laura", "rossi", 30, ["tss, tppw","sist"], 2025, 1);
console.log(mioStudente.nome);
console.log(mioStudente.presenti());

let tuoStudente = new Studente ("mario", "verdi", 32, ["tss, tppw","sist"], 2025, 1);
console.log(tuoStudente.presenti());

let corsoTSS = [
    new Studente("Claudio", "Curro", 31, ["Tss", "TPPW", "Sist"], 2025, 1),
    new Studente("Jacopo", "Magnano", 22, ["Tss", "TPPW", "Sist"], 2025, 2),
    new Studente("Vania", "Villanueva", 26, ["Tss", "TPPW", "Sist"], 2025, 3),

]

corsoTSS.forEach(studente => {
    console.log(studente.presenti());
    
});

//forin cicla su proprietà oggetti pur essendo non Enurable

for (const prop in mioStudente) {
    if(typeof mioStudente[prop] != 'function'){
        console.log(mioStudente[prop]); 
        
    }  
}

console.log(mioStudente['nome']);// notazione parentesi quadre, prop è scritta come una stringa


