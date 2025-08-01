class Viaggio{
    constructor(id, destinazione, prezzo, immagine, disponibilita){
        this.id = id;
        this.destinazione = destinazione;
        this.prezzo = prezzo;
        this.immagine = immagine;
        this.disponibilita = disponibilita;
    }
}

let showroom = document.querySelector("#showroom");


function getViaggi(){
    const URL = "http://localhost:3000/viaggi";
    try{
        fetch(URL)
        .then(data => {
            //inserire regole per controllare 
            return data.json();
        })
        .then(response => {
            //response è un array da 10 oggetti
            console.log(response);
            response.forEach(viaggio => {
                showroom.appendChild(creaCard(viaggio));
            });
        })
    }catch (error){
        console.error("Errore nella fetch: ", error);
    }
}

/**
 * @param {Viaggio} viaggio 
 */
function creaCard(viaggio){
    // <div class="col-4">
    // <div class="card">
    //     <img class="card-img-top" src="holder.js/100x180/" alt="Title" />
    //     <div class="card-body">
    //         <h4 class="card-title">Title</h4>
    //         <p class="card-text">Text</p>
    //     </div>
    // </div>
    // </div>


    let card = document.createElement("div");
    card.setAttribute("class", "col-4");

    let innerCard = document.createElement("div");
    innerCard.setAttribute("class", "card");

    let img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", viaggio.immagine);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let h4 = document.createElement("h4");
    h4.setAttribute("class", "card-title");
    h4.textContent = viaggio.destinazione;

    let p1 = document.createElement("p");
    p1.setAttribute("class", "card-text");
    p1.textContent = `€ ${viaggio.prezzo}`;

    let p2 = document.createElement("p");
    p2.setAttribute("class", "card-text");
    p2.textContent = `disponibilità: ${viaggio.disponibilita}`;

    let btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    btn.textContent = "Compra"
    if(!viaggio.disponibilita){
        btn.setAttribute("disabled", true);
    }
    btn.addEventListener("click", function(){
        addInCarrello(viaggio);
    })

    cardBody.appendChild(h4);
    cardBody.appendChild(p1);
    cardBody.appendChild(p2);
    cardBody.appendChild(btn);

    innerCard.appendChild(img);
    innerCard.appendChild(cardBody);

    card.appendChild(innerCard);

    return card;
}

/**
 * @param {Viaggio} viaggio 
 */
function addInCarrello(viaggio){
    const URL = "http://localhost:3000/carrello";

    //Creo un oggetto "a metà" passando solo le info che mi servono nel carrello
    let viaggioDaCarrello = {
        id: viaggio.id,
        destinazione: viaggio.destinazione,
        prezzo: viaggio.prezzo        
    }

    //uso la fetch con il metodo post per registrare un viaggio nel carrello
    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //dentro il body passo l'oggetto formato json (string) che voglio registrare
        body: JSON.stringify(viaggioDaCarrello)
    })
    .then(data =>{
        document.querySelector("#mainCont").innerHTML = 
        `<div class="d-flex justify-content-center mt-5">
            <div class="spinner-border" role="status">
            </div>
        </div>`;

        setTimeout(() => {
            console.log(data);
            location.href = "http://127.0.0.1:5500/06-PrjJS/carrello.html"
        }, 1500);


    })


}

document.addEventListener("DOMContentLoaded", getViaggi);