
const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clasica";




interface GrupoMusical {
    nombre: String,
    cantante: String | null 
    compositor: String | null,
    año: Number,
    activo: Boolean,
    genero: String,
}

const grupoMusicalA: GrupoMusical = {
    nombre: "The Beattles",
    cantante: null,
    compositor: null,
    año: 1960,
    activo: false,
    genero: popRock,
};

const grupoMusicalB: GrupoMusical = {
    nombre: "Queen",
    cantante: null,
    compositor: null,
    año: 1970,
    activo: false,
    genero: rock,
};
const grupoMusicalC: GrupoMusical = {
    nombre: "AC DC",
    cantante: null,
    compositor: null,
    año: 1973,
    activo: true,
    genero: hardRock,
};
const grupoMusicalD: GrupoMusical = {
    nombre: "Ludwig van Beethoven",
    cantante: null,
    compositor: null,
    año: 1770,
    activo: false,
    genero: clasica,
};
const grupoMusicalE: GrupoMusical = {
    nombre: "The Rolling Stones",
    cantante: null,
    compositor: null,
    año: 1962,
    activo: true,
    genero: rock,
};

console.log("Voy a mostrar el listado de grupos con sus características")

console.log(`%c${grupoMusicalA.nombre}`, 'font-weight: bold; font-size: 16px; background-color: green; color: white;');
console.log(`Cantante: ${grupoMusicalA.cantante}`);
console.log(`Compositor: ${grupoMusicalA.compositor}`);
console.log(`Año de fundación: ${grupoMusicalA.año}`);
console.log(`Activo: ${grupoMusicalA.activo}`);
console.log(`Género: ${grupoMusicalA.genero}`);

console.log(`%c${grupoMusicalB.nombre}`, 'font-weight: bold; font-size: 16px; background-color: green; color: white;');
console.log(`Cantante: ${grupoMusicalB.cantante}`);
console.log(`Compositor: ${grupoMusicalB.compositor}`);
console.log(`Año de fundación: ${grupoMusicalB.año}`);
console.log(`Activo: ${grupoMusicalB.activo}`);
console.log(`Género: ${grupoMusicalB.genero}`);

console.log(`%c${grupoMusicalC.nombre}`, 'font-weight: bold; font-size: 16px; background-color: green; color: white;');
console.log(`Cantante: ${grupoMusicalC.cantante}`);
console.log(`Compositor: ${grupoMusicalC.compositor}`);
console.log(`Año de fundación: ${grupoMusicalC.año}`);
console.log(`Activo: ${grupoMusicalC.activo}`);
console.log(`Género: ${grupoMusicalC.genero}`);

console.log(`%c${grupoMusicalD.nombre}`, 'font-weight: bold; font-size: 16px; background-color: green; color: white;');
console.log(`Cantante: ${grupoMusicalD.cantante}`);
console.log(`Compositor: ${grupoMusicalD.compositor}`);
console.log(`Año de fundación: ${grupoMusicalD.año}`);
console.log(`Activo: ${grupoMusicalD.activo}`);
console.log(`Género: ${grupoMusicalD.genero}`);

console.log(`%c${grupoMusicalE.nombre}`, 'font-weight: bold; font-size: 16px; background-color: green; color: white;');
console.log(`Cantante: ${grupoMusicalE.cantante}`);
console.log(`Compositor: ${grupoMusicalE.compositor}`);
console.log(`Año de fundación: ${grupoMusicalE.año}`);
console.log(`Activo: ${grupoMusicalE.activo}`);
console.log(`Género: ${grupoMusicalE.genero}`);

