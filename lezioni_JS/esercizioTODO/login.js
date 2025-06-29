class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}

let msgErrore = document.querySelector("#msgErrore");
let mioForm = document.querySelector("#mioForm");

function doLogin(event) {
    event.preventDefault();
    let user = new User();
    msgErrore.innerHTML = "";

    let valid = true; //variabile che uso per capire raggruppare i dati corretti e mandare alla pag inde.html della to do list, invece di usare i return
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    
    if(!mioForm.email.value.match(emailRegex) || mioForm.email.value == "") {
        msgErrore.innerHTML += "<h5>Email errata</h5>";
        valid = false;
    }else{
        user.email = mioForm.email.value;
    }

    if(!mioForm.password.value.match(passwordRegex) || mioForm.password.value == "") {
        console.log("Password NON valida", mioForm.password.value.match(passwordRegex));
        msgErrore.innerHTML += "<h5>Password Errata</h5>";
        valid = false;   
    }else{
        console.log("Password valida", mioForm.password.value.match(passwordRegex));
        user.password = mioForm.password.value;
    }

    if (valid) {
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "index.html";
    } // se è tutto vero salva nel local storage e vai alla to do list
    
}
mioForm.addEventListener("submit", doLogin, false);