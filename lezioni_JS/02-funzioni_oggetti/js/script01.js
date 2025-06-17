//dichairo funzione
let demo = document.getElementById("demo");

function saluta(){
    console.log("ciao dalla funzione");
    demo.innerHTML = "<h2> Ciao, Dario</h2>";
}

//per eseguire funzione devo richiamarla
//la funzione la posso richimare direttamente nello script
//saluta();

//la posso richiamare in un altra funzione
function benvenuto() {
    saluta();
    console.log("sdesso sono dentro benvenuto");
    
}

//benvenuto();

//adesso richiamo la dunzione dall'html

let btn = document.getElementById("btn");
//btn.addEventListener("click", benvenuto);
// att: nell'addEventListener la funzione va richiamata senza le parentesi
btn.addEventListener("click", benvenuto, false);