console.log("Ciao, sei nella console");

//dichiaro variable

let mioNome = "Ludovica";
let miaEta = 31;
let presenza = true;
var corso = "TSPPI";

console.log("il tipo della variabile mioNome è: ", typeof mioNome);
console.log("il tipo della variabile miaEta è: ", typeof miaEta);

//concateno stringhe

console.log("ciao " + mioNome + " hai " + miaEta + " anni.");

// Ctrl + ù 
// modo veloce concatetna stringhe con backtick
console.log(`ciao ${mioNome} hai ${miaEta}`);

//es con tipi
let num1 = 10;
let num2 = 5;
console.log("la somma vale " + (num1 + num2));

let num3 = "25";
let num4 = "6";
let somma = Number(num3) + Number(num4); //256 Number parsInt parsFloat
let prodotto = num3 * num4;
let diff = num3 - num4;
let quoziente = num3 / num4;

console.log(somma);
console.log(prodotto);
console.log(diff);
console.log(quoziente);

/*let numeroCas = window.prompt("inserisci un numero");
console.log(typeof numeroCas);

let mioNUm = 50;
let somma2 = numeroCas + mioNUm;
console.log(somma2);
*/
//array simili collection array list di java
let studenti = ["Claudio", "Vania", "Ludovica", "Andrea", "Glenda", "Edo", "Nick", "Shar", "Ivan", "Jacopo", 4 , true];

for(let i = 0; i < studenti.length; i++){
    console.log(studenti[i])   
}

studenti.forEach(studente => {
    console.log(studente);   
})

for(const stud of studenti){
    console.log(stud);  
}

//ho prop e metodi legati all'oggetto array
studenti.push("Dario");
studenti.sort().reverse();
studenti.pop(); //elimina ultimo el
studenti.shift();//elimina primo el
//estraggo e sostituisco piu el con splice
studenti.splice(2.5); //modifica array originale
//non modifica array originale
studenti.slice(2,6);

let studentiEstratti = studenti.slice(2,6);

console.log(studentiEstratti);

//metodi cerca el

console.log(studenti.indexOf("Claudio"));
console.log(studenti.lastIndexOf("Claudio"));

//metodo filter

let filtro = studenti.filter(nome => nome.length > 6);
console.log(filtro);//restituisce array

let find = studenti.find(nome => nome.length > 6);
console.log(find);//restituisce singolo el

//metodi per unire e spaccare array

let parole = ["cioa", "kkkk", "ppppp", "sssss"];
console.log(parole.join("_"));






