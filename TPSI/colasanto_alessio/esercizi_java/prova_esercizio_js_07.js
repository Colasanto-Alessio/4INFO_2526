function aggiungi() {
    let table = document.getElementById("tabella")
    let cognome = document.getElementById("cognome").value
    let nome = document.getElementById("nome").value
    let indirizzo = document.getElementById("indirizzo").value
    let telefono = document.getElementById("telefono").value
    if (cognome=="" || nome=="" || indirizzo=="" || telefono=="" ) {
        alert("inserici tutti i campi")
    }
    let riga = document.createElement("tr")
    let cellacognome = document.createElement("td")
    let cellanome = document.createElement("td")
    let cellaindirizzo = document.createElement("td")
    let cellatelefono = document.createElement("td")
    let buttonremove = document.getelementById('pulsate-invio');

    let remove = buttonremove.addEventListener('click', gestoreClick);

    cellacognome.innerText = cognome;
    cellanome.innerText = nome;
    cellaindirizzo.innerText = indirizzo;
    cellatelefono.innerText = telefono;

    table.append(riga)
    riga.append(cellacognome,cellanome,cellaindirizzo,cellatelefono,remove)

}
function cercadalipi() {
}
