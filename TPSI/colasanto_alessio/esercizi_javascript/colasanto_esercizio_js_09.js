document.addEventListener("DOMContentLoaded",main,false);
function main() {
let pass;
let user=prompt("Username: ");
(user == "" && alert("cancellato"));
(user != "admin" && alert("non ti conosco"));
(user == "admin" && (pass=prompt("password: ")));
(pass == null && alert("cancellato"));
(pass != "Agnell1no" && alert("password errata"));
(pass == "Agnell1no" && alert("benvenuto"));
}
