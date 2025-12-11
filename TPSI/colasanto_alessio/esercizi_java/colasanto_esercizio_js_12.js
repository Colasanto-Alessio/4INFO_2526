let Automobile = function (nome, marca) {
    this.nome = nome,
    this.marca = marca,
    this.speak = () => {
      console.log(`il nome è ${this.nome} la marca è ${this.marca}`);
    };
    this.metodo2 = () => {
      console.log("mangiopasta")
    }
    this.enumera = () => {
      console.log(this.nome)
    }
  };

let utente1 = new Automobile("fiat", "bmw");
let utente2 = new Automobile("stellantis", "bmw");
let utente3 = new Automobile("ferrari", "bmw");
utente1.speak()
utente2.speak()
utente3.speak()
utente1.enumera()


let Animale = function (nome, colore) {
  (this.nome = nome),
    (this.colore = colore),
      (this.speak = function () {
      console.log(`il nome è ${this.nome} il colore è ${this.colore}`);
    });
};

let utente1A = new Animale("volpe", "bianco");
let utente2A = new Animale("orso", "nero");
let utente3A = new Animale("pappagallo", "rosso");
utente1A.speak()
utente2A.speak()
utente3A.speak()

let Poligono = function (nome, bho) {
  (this.nome = nome),
    (this.bho = bho),
      (this.speak = function () {
      console.log(`il nome è ${this.nome} il bho è ${this.bho}`);
    });
};

let utente1P = new Poligono("strano", "bmw");
let utente2P = new Poligono("isoscele", "bmw");
let utente3P = new Poligono("rettangolo", "bmw");
utente1P.speak()
utente2P.speak()
utente3P.speak()
