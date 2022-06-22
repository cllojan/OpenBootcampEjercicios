let datosP = {
    nombre:"Cesar",
    apellido:"Lojan",
    edad:20,
    altura:160,
    eresDesarrollador:true,
}

let edad = datosP["edad"];
let lista = [datosP,{
    nombre:"Dani",
    apellido:"Carrion",
    edad:22,
    altura:164,
    eresDesarrollador:false,
},{
    nombre:"Walter",
    apellido:"Chiquimarca",
    edad:21,
    altura:154,
    eresDesarrollador:false,
}]

let listaOrdenada = lista.sort((a,b) =>  b["edad"] - a["edad"]);
