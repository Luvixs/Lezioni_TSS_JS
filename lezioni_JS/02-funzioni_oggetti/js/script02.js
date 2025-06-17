let risultati = document.getElementById("risultati");
let btnSomma = document.getElementById("btnSomma");
let btnProd = document.getElementById("btnProd");
let btnCalcola = document.getElementById("btnCalcola");
somma(5, 5); //globale


function calcolaTutto(num1, num2){
    somma(num1, num2)
    
    risultati.innerHTML += "<h4>" + prodotto(num1, num2) + "</h4>"
}

function somma(num1, num2) {
    let somma = num1 + num2;
    risultati.innerHTML += `<h4>${somma}</h4>`
    return somma;
}

function prodotto(num1, num2) {
    let prod = num1 * num2;
    return prod;
}

 let mioNum = 5;
 let tuoNum = 12.54;

//funzione anonima dentro eventListener
btnSomma.addEventListener("click", function (){
 
    somma(mioNum, tuoNum);
})

btnProd.addEventListener("click", function (){
   
    let valoreProd = prodotto(mioNum, tuoNum);
    risultati.innerHTML += `Il prodotto vale: <h4>${valoreProd}</h4>`
})

btnCalcola.addEventListener("click", function (){
    calcolaTutto(mioNum, tuoNum)
})