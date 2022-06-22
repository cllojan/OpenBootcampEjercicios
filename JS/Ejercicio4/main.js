let nombre = "Cesar ";
let apellido = "Lojan";

let estudiante = nombre.concat(apellido);

let estudianteMayuscula = estudiante.toUpperCase();
let estudianteMinuscula = estudiante.toLowerCase();
let lengthEstudiante = estudiante.length;
let primerLetra = nombre.charAt(0);
let ultimaLetra = apellido.charAt(apellido.length);

let estudianteSinEspacio = estudiante.split(" ").join("");

let boolNombre = estudiante.includes(nombre);
