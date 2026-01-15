export const abbreviazione = (str) => {
    let nome = str.split(" ")[0];
    let cognome = str.split(" ")[1];

    nome = nome.charAt(0).toUpperCase().concat(nome.slice(1,nome.length));
    cognome = (" ").concat(cognome.toUpperCase().charAt(0));
    return nome.concat(cognome.concat("."));
}