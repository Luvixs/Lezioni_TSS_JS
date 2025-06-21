/* let attore = document.querySelector("#attore1");
let linkNome = document.createElement("a");
attore.textContent = "Adrien Brody";
linkNome.setAttribute("href", "https://it.wikipedia.org/wiki/Adrien_Brody");
attore.appendChild(linkNome); */

//per ogni id che trovi aggiungi il nome attore
//aggiungi a
//aggiungi event listener per far andare il link wikipedia
//aggiungi la foto

const attori = [
  {
    nome: "Cillian Murphy",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/MKr347645_Cillian_Murphy_%28Small_Things_Like_These%2C_Berlinale_2024%29.jpg/960px-MKr347645_Cillian_Murphy_%28Small_Things_Like_These%2C_Berlinale_2024%29.jpg",
    wiki: "https://it.wikipedia.org/wiki/Cillian_Murphy"
  },
  {
    nome: "Brendan Fraser",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Brendan_Fraser_October_2022.jpg/960px-Brendan_Fraser_October_2022.jpg",
    wiki: "https://it.wikipedia.org/wiki/Brendan_Fraser"
  },
  {
    nome: "Will Smith",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/TechCrunch_Disrupt_San_Francisco_2019_-_Day_1_%2848834070763%29_%28cropped%29.jpg/800px-TechCrunch_Disrupt_San_Francisco_2019_-_Day_1_%2848834070763%29_%28cropped%29.jpg",
    wiki: "https://it.wikipedia.org/wiki/Will_Smith"
  },
  {
    nome: "Anthony Hopkins",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/47/AnthonyHopkins10TIFF.jpg",
    wiki: "https://it.wikipedia.org/wiki/Anthony_Hopkins"
  },
  {
    nome: "Joaquin Phoenix",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Joaquin_Phoenix-64908_%28cropped%29.jpg/800px-Joaquin_Phoenix-64908_%28cropped%29.jpg",
    wiki: "https://it.wikipedia.org/wiki/Joaquin_Phoenix"
  },
  {
    nome: "Rami Malek",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Rami_Malek_SAG_Awards_2019.png",
    wiki: "https://it.wikipedia.org/wiki/Rami_Malek"
  }
];

attori.forEach((attore, index) => {
    
    let li = document.querySelector("#attore" + (index + 1));
    let linkNome = document.createElement("a");
    let img = document.querySelector("#img" + (index + 1));

    linkNome.textContent = attore.nome;
    linkNome.setAttribute("href", attore.wiki);
    li.insertBefore(linkNome, img);

    img.setAttribute("src", attore.img);
    img.setAttribute("alt", attore.nome);
    img.style.width = "150px";
    img.style.height = "auto";
    console.log(attore.img);
});