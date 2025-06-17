class Torta {
  constructor(nome, prezzo, ingredienti, dataScadenza, imgTorta) {
    this.nome = nome;
    this.prezzo = prezzo;
    this.ingredienti = ingredienti;
    this.dataScadenza = dataScadenza;
    this.imgTorta = imgTorta;
  }
}

let torte = [
  new Torta(
    "Tiramisu",
    2.5,
    ["Mascarpone", "Savoiardi", "Caffe", "Uova", "Zucchero"],
    new Date(2025, 6, 20),
    "./assets/Img/tiramisu.jpg"
  ),
  new Torta(
    "Crostata fruttirossi",
    1.7,
    [
      "Frutti Rossi",
      "Crema Pasticcera",
      "Uova",
      "Burro",
      "Farina 00",
      "Zucchero",
    ],
    new Date(2025, 6, 18),
    "./assets/Img/crostata.jpg"
  ),
  new Torta(
    "Millefoglie",
    3.5,
    ["Crema Diplomatica", "Sfoglia", "Uova", "Burro", "Zucchero"],
    new Date(2025, 6, 16),
    "./assets/Img/millefoglie.jpg"
  ),
  new Torta(
    "Sacher",
    3.5,
    ["Cioccolato", "Panna", "Confettura di Albicocche", "Uova", "Cacao", "Zucchero"],
    new Date(2025, 6, 17),
    "./assets/Img/sacher.jpg"
  ),
];

//creo la card

function createCardCake(torte) {
 
const card = document.createElement("div");
card.className = "col-md-3 d-flex";


card.innerHTML = `
  <div  class="card style="width: 18rem;">
    <img src="${torte.imgTorta}" class="card-img-top immagineCard" alt="${torte.nome}" />
    <div class="card-body">
      <h5 class="card-title">${torte.nome}</h5>
      <p class="card-text"> Prezzo: € ${torte.prezzo}</p>
      <p class="card-text"> Ingredienti: ${torte.ingredienti.join(", ")}</p>
      <p class="card-text"> Scadenza: ${torte.dataScadenza.toLocaleDateString()}</p>  
      <a href="#" class="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>

  `
  return card;
}

const container = document.getElementById("torteContainer");
torte.forEach(torta => container.appendChild(createCardCake(torta)));
