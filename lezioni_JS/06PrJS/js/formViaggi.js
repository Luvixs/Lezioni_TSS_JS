let form = document.querySelector("#addFormViaggi");
let maxId = 0;
async function addViaggi() {
  const URL = "http://localhost:3000/viaggi";
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log("Viaggi caricati:", data);
    // Qui puoi cercare il max id
    maxId = getMaxId(data);
  } catch (error) {
    console.error("Errore nella fetch:", error);
  }
}


function getMaxId(viaggi) {
  
  viaggi.forEach(v => {
    const idNum = parseInt(v.id, 10); // Converte l'id da stringa a numero
    if (idNum > maxId) {
      maxId = idNum; // Salva l'id più grande
    }
  });
  return maxId;
}
function formSubmit(event) {
event.preventDefault();

// Leggo i dati del form
const destinazione = document.querySelector("#destinazione").value.trim();
const prezzo = document.querySelector("#prezzo").value.trim();
const disponibilita = document.querySelector("#viaggioDisp").checked;
const immagine = document.querySelector("#img").value.trim();

let viaggioNuovo = {
        id: (maxId + 1).toString(), // id come stringa
        destinazione,
        prezzo,
        immagine,
        disponibilita   
    }
postViaggi(viaggioNuovo)
}

/**
 * @param {Viaggio} viaggio 
 */
function postViaggi(viaggioNuovo){
    const URL = "http://localhost:3000/viaggi"

    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //dentro il body passo l'oggetto formato json (string) che voglio registrare
        body: JSON.stringify(viaggioNuovo)
    })
    .then(response =>{
        if (!response.ok) throw new Error("Errore nella POST");
      return response.json();
    })
    .then(data => {
      console.log("Viaggio aggiunto:", data);
      alert("Viaggio inserito con successo!");
      maxId++; // aggiorno l'ultimo ID
    })



}
//document.addEventListener("DOMContentLoaded", addViaggi, formSubmit);

document.addEventListener("DOMContentLoaded", () => {
  addViaggi();
  form.addEventListener("submit", formSubmit);
});
