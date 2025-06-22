

//li.textContent = " ssss";

// Aggiungo l'event listener direttamente all'elemento creato
/* li.addEventListener("click", function() {
    li.classList.toggle("barrato"); 
}); */

//document.getElementById("listaTodo").appendChild(li);

let btnAdd = document.querySelector("#btnAdd");

btnAdd.addEventListener("click", function() {
    
    let inputValue = document.querySelector("#item").value; //prendo il valore dell' input

    let li = document.createElement("li"); //creo nuovo li
    li.textContent = inputValue;
    
    let btnDeleteToDO = document.createElement("button"); // creo btn X
    btnDeleteToDO.textContent = "X";

    btnDeleteToDO.addEventListener("click", function (event) {
        //event.stopPropagation(); // evita che si attivi anche il barrato. Non lo abbiamo fatto, ma l'ho messo per ricordarmi dell' Event Bubbling
        li.remove();
    });

    li.appendChild(btnDeleteToDO); //appendo btn X al li

    //Aggiungo il barrato al click
    li.addEventListener("click", function() {
        li.classList.toggle("barrato");
    });
    
    document.getElementById("listaTodo").appendChild(li); //appendo li alla lista

    document.querySelector("#item").value = ""; //svuoto l'input
})

let orologioDigi = document.createElement("div"); //creo div per l'orologio
document.body.appendChild(orologioDigi); //appendo il div al body
orologioDigi.classList.add("oreDigi"); //aggiungo la classe per lavorare con il css

setInterval(function() {
    let ora = new Date();
    orologioDigi.textContent = ora.toLocaleTimeString();
}, 1000);

