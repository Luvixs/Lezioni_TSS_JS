let prodotti = ["pasta", "riso", "latte", "uova", "mele", "pollo", "biscotti", "cereali", "acqua", "succo"];
let prezzi = [1.00, 0.99, 1.50, 2.00, 1.20, 4.99, 3.50, 2.50, 0.95, 2.50];
let quants = [4, 1, 2, 1, 3, 2, 5, 1, 5, 1];
let listaScontrino = [];

let listaSpesa = document.getElementById("listaSpesa");
let tr = document.createElement("tr");
let td = document.createElement("td");
//prodotti.appendChild(td);

prodotti.forEach(prodotti => {
    
        prodotti.innerHTML += `<td>${prodotti}</td>`;
    
    console.log(prodotti);
    
})

listaSpesa.innerHTML = `
                <tr>
                    <td>${prodotti}</td>
                </tr

`
