function aggiungi() {
    let prodotto = document.getElementById("prodoo").value;
    let quantita = document.getElementById("qty").value;
    let costo = document.getElementById("costo").value;
    quantita = Number(quantita);
    costo=Number(costo);
    let prezzofinale = quantita*costo;
    let id = Date.now();

    let riga = document.createElement("tr");
    let tdprodotto = document.createElement("td");
    let tdquantita = document.createElement("td");
    let tdcosto = document.createElement("td");
    let tdprezzofinale = document.createElement("td");
    let rimuovi = document.createElement("span");
    let inputquantita = document.createElement("input");

    riga.id=id;
    tdprodotto.innerText = prodotto;
    inputquantita.value = quantita;
    inputquantita.id = id;
    tdcosto.innerText = `${costo} €`;
    tdprezzofinale.innerText = `${prezzofinale} €`;
    rimuovi.innerText ="remove_shopping_cart";

    rimuovi.classList.add("material-icons","icon-remove");
    inputquantita.min = "1"
    inputquantita.type = "number"

    tdquantita.append(inputquantita);
    let ultimariga = document.getElementById("ultima");
    riga.append(tdprodotto,tdquantita,tdcosto,tdprezzofinale,rimuovi);
    ultimariga.parentNode.insertBefore(riga,ultimariga);

    rimuovi.addEventListener('click',function() { 
        riga.remove();
    });

    inputquantita.addEventListener('change',function(el) {
        let id = el.srcElement.id;
        let riga = document.getElementById(id);
        let ch = riga.children;
        let quantita = ch[1].children[0].value;
        let costo = ch[2].innerText;
        console.log(quantita,costo)
        tdprezzofinale.innerText = `${prezzofinale} €`;
    });


}


