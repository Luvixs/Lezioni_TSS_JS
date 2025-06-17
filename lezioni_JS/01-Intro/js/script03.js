let prodotti = ["pasta", "riso", "latte", "uova", "mele", "pollo", "biscotti", "cereali", "acqua", "succo"];
let prezzi = [1.00, 0.99, 1.50, 2.00, 1.20, 4.99, 3.50, 2.50, 0.95, 2.50];
let quants = [4, 1, 2, 1, 3, 2, 5, 1, 5, 1];


let listaSpesa = document.getElementById("listaSpesa");
let grandTotl = 0;


for(let i = 0; i < prodotti.length; i++){
    let subtotal = quants[i] * prezzi[i];
    grandTotl += subtotal;
    listaSpesa.innerHTML += `<tr> 
                            <td> ${prodotti[i]} </td>
                            <td> ${prezzi[i]} </td>
                            <td> ${quants[i]} </td>
                            <td> ${subtotal.toFixed(2)} </td>
                            </tr>
                            `
}

let totale = document.getElementById("totale");
totale.innerHTML = grandTotl + " euro";

