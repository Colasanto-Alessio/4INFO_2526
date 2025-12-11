let utente = {
    nome : "Mario",
    cognome : "Rossi"
}
for(let chiave=0;chiave=Object.keys(utente);chiave++) {
    console.log(`la chiave ${chiave} ha valore ${utente[chiave]}`);
}