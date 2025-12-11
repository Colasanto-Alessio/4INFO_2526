function aggiungi() {
    let input1 = document.getElementById("field").value;
    let priorita = document.getElementById("priority").value;
    let contenitore = document.getElementById("grid-task");

    let divinput1 = document.createElement("div");
    let spanpriorita = document.createElement("span");
    let spancompletato = document.createElement("span");
    let spanrimuovi = document.createElement("span");

    divinput1.innerText = input1;
    divinput1.classList.add("task");
    divinput1.classList.add("taskName");

    spanpriorita.classList.add("material-symbols-outlined");
    spancompletato.classList.add("material-symbols-outlined");
    spanrimuovi.classList.add("material-symbols-outlined");

    if (priorita == "alta") {
        spanpriorita.innerText = "north";
        spanpriorita.classList.add("red");
    }
    else if (priorita == "media") {
        spanpriorita.innerText = "east";
        spanpriorita.classList.add("yellow");
    }
    else if (priorita == "bassa") {
        spanpriorita.innerText = "south";
        spanpriorita.classList.add("green");
    }

    spancompletato.innerText = "done_outline";
    spancompletato.classList.add("gray");
    spancompletato.addEventListener('click', function() {
        divinput1.classList.toggle("completed");
    });
    spanrimuovi.innerText = "delete";
    spanrimuovi.classList.add("gray");
    spanrimuovi.addEventListener('click',function() { 
        divinput1.remove();
        spanpriorita.remove();
        spancompletato.remove();
        spanrimuovi.remove();
    });
    contenitore.append(divinput1, spanpriorita, spancompletato, spanrimuovi);

}
