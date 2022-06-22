let lista_compra = ["Pan", "leche","huevos"]
lista_compra.push("Aceite de girasol")
lista_compra.slice(0,1)
let pelicula_favoritas=[{
        titulo:"Chip 'n Dale: Rescue Rangers",
        director:"Akiva Schaffer",
        fecha:"2022-05/20"
    },
    {
        titulo:"The Godfather",
        director:"The Godfather",
        fecha:"1972-10-20"
    },
    {
        titulo:"Pulp Fiction",
        director:"Quentin Tarantino",
        fecha:"1995-01-13"
    }
]
let limit = new Date("2010").getTime();
let posteriores = pelicula_favoritas.filter((x) => new Date(x.fecha).getTime() >= limit);
let directores = pelicula_favoritas.map(x => x.director);
let titulos = pelicula_favoritas.map(x => x.titulo)
let concatene1 = titulos.concat(directores);
let concatene2 = [...titulos,...directores];

 
