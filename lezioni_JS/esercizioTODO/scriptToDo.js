let btnAdd = document.querySelector("#btnAdd");
let user = JSON.parse(localStorage.getItem("user"));


if (user) {
    let divBenvenuto = document.createElement("div");
    divBenvenuto.classList.add("DammiBenvenuto");
    divBenvenuto.innerHTML = `<h2>Benvenuto ${user.email}</h2>`;
    //document.body.appendChild(divBenvenuto);

    const h1 = document.querySelector("h1");
    h1.parentNode.insertBefore(divBenvenuto, h1.nextSibling);

    console.log("Benvenuto " + user.email);
    //caricaTodoList();
    localStorage.getItem("todoList");
} else {
    window.location.href = "login.html";
}

// Funzione per creare un elemento della todo list (logica esistente spostata qui)
function creaTodoItem(inputValue, barrato = false) {
    let li = document.createElement("li"); //creo nuovo li
    li.textContent = inputValue;
    
    // Se era barrato, aggiungo la classe
    if (barrato) {
        li.classList.add("barrato");
    }
    
    let btnDeleteToDO = document.createElement("button"); // creo btn X
    btnDeleteToDO.textContent = "X";

    btnDeleteToDO.addEventListener("click", function (event) {
        //event.stopPropagation(); // evita che si attivi anche il barrato. Non lo abbiamo fatto, ma l'ho messo per ricordarmi dell' Event Bubbling
        li.remove();
        salvaTodoList();
    });

    li.appendChild(btnDeleteToDO); //appendo btn X al li

    //Aggiungo il barrato al click
    li.addEventListener("click", function() {
        li.classList.toggle("barrato");
        salvaTodoList();
    });
    
    document.getElementById("listaTodo").appendChild(li); //appendo li alla lista
}

//funzione per salvare nel local storage la lista
function salvaTodoList() {
    let lista = document.getElementById("listaTodo");
    let items = [];
    
    // Raccolgo tutti gli elementi li della lista
    let liElements = lista.querySelectorAll("li");
    
    liElements.forEach(function(li) {
        // Prendo il testo dell'elemento (escludendo il pulsante X)
        let testo = li.firstChild.textContent;
        // Controllo se l'elemento è barrato
        let barrato = li.classList.contains("barrato");
        
        items.push({
            testo: testo,
            barrato: barrato
        });
    });
    
    // Salvo nel localStorage
    localStorage.setItem("todoList", JSON.stringify(items));
}

// Funzione per caricare la lista dal localStorage
 function caricaTodoList() {
    let savedList = localStorage.getItem("todoList");
    
    if (savedList) {
        let items = JSON.parse(savedList);
        
        items.forEach(function(item) {
            creaTodoItem(item.testo, item.barrato);
        });
    }
}
/* btnAdd.addEventListener("click", function() {
    
    let inputValue = document.querySelector("#item").value; //prendo il valore dell' input

    let li = document.createElement("li"); //creo nuovo li
    li.textContent = inputValue;
    
    let btnDeleteToDO = document.createElement("button"); // creo btn X
    btnDeleteToDO.textContent = "X";

    btnDeleteToDO.addEventListener("click", function (event) {
        //event.stopPropagation(); // evita che si attivi anche il barrato. Non lo abbiamo fatto, ma l'ho messo per ricordarmi dell' Event Bubbling
        li.remove();
        salvaTodoList();
    });

    li.appendChild(btnDeleteToDO); //appendo btn X al li

    //Aggiungo il barrato al click
    li.addEventListener("click", function() {
        li.classList.toggle("barrato");
        salvaTodoList();
    });
    
    document.getElementById("listaTodo").appendChild(li); //appendo li alla lista
    salvaTodoList();

    document.querySelector("#item").value = ""; //svuoto l'input
}) */


btnAdd.addEventListener("click", function() {
    let inputValue = document.querySelector("#item").value; //prendo il valore dell' input
    
    // Ora uso la funzione invece di ripetere tutto il codice
    creaTodoItem(inputValue);
    salvaTodoList();
    
    document.querySelector("#item").value = ""; //svuoto l'input
})


let orologioDigi = document.createElement("div"); //creo div per l'orologio
document.body.appendChild(orologioDigi); //appendo il div al body
orologioDigi.classList.add("oreDigi"); //aggiungo la classe per lavorare con il css

setInterval(function() {
    let ora = new Date();
    orologioDigi.textContent = ora.toLocaleTimeString();
}, 1000);

