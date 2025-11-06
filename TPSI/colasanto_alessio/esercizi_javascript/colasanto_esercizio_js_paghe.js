document.addEventListener("DOMContentLoaded",main,false);
function main() {
    let obj = document.getElementById("aggiungi");
    let obj2= document.getElementById("tot");
    let obj3= document.getElementById("med");
    obj.addEventListener("click",aggiungi);
    obj2.addEventListener("click",tot);
    obj3.addEventListener("click",med);
}

function aggiungi() {
    let dipartimento = document.getElementById("dipartimento");
    let cognome = document.getElementById("cognome");
    let nome = document.getElementById("nome");
    let mese = document.getElementById("mese");
    let importo = document.getElementById("importo");
    if (dipartimento.value == "" || cognome.value == "" || nome.value == "" || mese.value == "" || importo.value == "" )
        alert("inserire tutti i value");
    let riga = document.createElement("tr");
    let cella1 = document.createElement("td");
    let cella2 = document.createElement("td");
    let cella3 = document.createElement("td");
    let cella4 = document.createElement("td");
    let cella5 = document.createElement("td");
    cella1.innerText = dipartimento.value;
    cella2.innerText = cognome.value;
    cella3.innerText = nome.value;
    cella4.innerText = mese.value;
    cella5.innerText = importo.value;
    const body = document.body;
    body.append(riga);
    body.append(cella1);
    body.append(cella2);
    body.append(cella3);
    body.append(cella4);
    body.append(cella5);
}

function tot() {
    
}

function med() {

}