let studenti = ["Claudio", "Vania", "Ludovica", "Andrea", "Glenda", "Edo", "Nick", "Shar", "Ivan", "Jacopo"];

//stampa i nomi all' interno del div in una lista di li
//1.recupero la porzione di html sulla quale voglio lavorare
let demo = document.getElementById("demo");
console.log(demo);
//cambio la proprietà del testo al suo interno leggo e scrivo + testo html

//demo.innerHTML = "<li>" + studenti[0] + "</li>";

for(let i = 0; i < studenti.length; i++){
    demo.innerHTML += `<li>${studenti[i]}</li>`
}

let docenti = ["Dario", "oscar", "Luca", "Roberto", "Egle"];
let listaDoc = document.getElementById("listaDoc");
docenti.forEach(docente => {
    if(docente == "Dario"){
        listaDoc.innerHTML += `<li class="txtRed">${docente}</li>`;
    }else{
    listaDoc.innerHTML += `<li class="txtBlue">${docente}</li>`;
    }    
})

let fotoGruppo = document.getElementById("fotoGruppo");
//fotoGruppo.innerHTML = "<img src='./img/fotogruppo.jpg'>";

let img = document.createElement("img");
img.setAttribute("src", "./img/fotogruppo.jpg");
img.setAttribute("title", "foto gruppo");
img.setAttribute("class", "dimImg");
// att: img è figlio di fotoGruppo
fotoGruppo.appendChild(img);
