let turno = 0;

const pintarTurno = () => {
  const inputNumeroTurno = document.getElementById("numeroTurno");
  if (
    inputNumeroTurno !== undefined &&
    inputNumeroTurno !== null &&
    inputNumeroTurno instanceof HTMLInputElement
  ) {
    inputNumeroTurno.value = turno.toString().padStart(2, "0");
  } else {
    console.error("no se encuentra el input");
  }
};

const aumentarTurno = () => {
  turno++;
  pintarTurno();
};
const disminuirTurno = () => {
  if (turno > 0) {
    turno--;
    pintarTurno();
  }
};
const resetTurno = () => {
    turno = 0;
    pintarTurno();
  };

const eventos = () =>{
    const botonMas = document.getElementById("botonMas");
    if( botonMas !== null && botonMas !== undefined && botonMas instanceof HTMLButtonElement){
        botonMas.addEventListener ("click", aumentarTurno)
    }
    else{
        console.error("error del boton mas");
    }

    const botonMenos = document.getElementById("botonMenos");
    if( botonMenos !== null && botonMenos !== undefined && botonMenos instanceof HTMLButtonElement){
        botonMenos.addEventListener ("click", disminuirTurno)
    }
    else{
        console.error("error del boton menos");
    }

    const botonReset = document.getElementById("botonReset");
    if( botonReset !== null && botonReset !== undefined && botonReset instanceof HTMLButtonElement){
        botonReset.addEventListener ("click", resetTurno)
    }
    else{
        console.error("error del boton reset");
    }

    
    }
const cambiarTurno = () => {
    const inputNuevoTurno = document.getElementById("nuevoTurno")
    if(inputNuevoTurno !== null && inputNuevoTurno !== undefined && inputNuevoTurno instanceof HTMLInputElement){
        const nuevoTurno = parseInt(inputNuevoTurno.value, 10);
        if(!isNaN(nuevoTurno)){
            turno = nuevoTurno;
            pintarTurno();
        }
    }
}
const nuevoEvento = () =>{const botonCambiarTurno = document.getElementById("botonCambiarTurno");
        if (botonCambiarTurno !==null && botonCambiarTurno !== undefined && botonCambiarTurno instanceof HTMLButtonElement){
            botonCambiarTurno.addEventListener("click", cambiarTurno);
    }
}
    

document.addEventListener("DOMContentLoaded",() => {
    pintarTurno();
    eventos();
    nuevoEvento();
});


// let nuevoTurno = 0;

// const pintarNuevoTurno = () => {
//     const inputNuevoTurno = document.getElementById("numeroTurno");
//   if (
//     inputNuevoTurno !== undefined &&
//     inputNuevoTurno !== null &&
//     inputNuevoTurno instanceof HTMLInputElement
//   ) {
//     inputNuevoTurno.value = turno.toString().padStart(2, "0");
//   } else {
//     console.error("no se encuentra el input");
//   }
// };

// const turnoNuevo = () => {
//     turno = nuevoTurno;
//     pintarNuevoTurno();

// };

// const nuevoEventos = () =>{
//     const botonCambiarTurno = document.getElementById("botonMas");
//     if( botonCambiarTurno !== null && botonCambiarTurno !== undefined && botonCambiarTurno instanceof HTMLButtonElement){
//             botonCambiarTurno.addEventListener ("click", turnoNuevo)
//     }
//     else{
//         console.error("error del boton cambiar turo");
//         }
//     }




// document.addEventListener("DOMContentLoaded", () => {
//     pintarNuevoTurno();
//     nuevoEventos();
// })

// const inputNumeroTurno = document.getElementById ("numeroTurno");
// const botonMas = document.getElementById("botonMas");
// const botonMenos = document.getElementById ("botonMenos");
// const botonReset = document.getElementById ("botonReset");

// if(inputNumeroTurno !== undefined && inputNumeroTurno !== null && botonMas !== null && botonMas !== undefined){
//     botonMas.addEventListener ("click", ()=>{
//     if(inputNumeroTurno instanceof HTMLInputElement){
//         let numeroActual = Number(inputNumeroTurno.value) || 0;
//     inputNumeroTurno.value = (numeroActual +1).toString().padStart(2, "0");}

// });}

// if(inputNumeroTurno !== undefined && inputNumeroTurno !== null && botonMenos !== null && botonMenos !== undefined){
//     botonMenos.addEventListener("click", () => {
//         if(inputNumeroTurno instanceof HTMLInputElement){
//             let numeroActual = Number (inputNumeroTurno.value) || 0;
//     inputNumeroTurno.value = (numeroActual - 1).toString().padStart(2, "0");}
// });}

// if(inputNumeroTurno !== null && inputNumeroTurno !== undefined && botonReset !== null && botonReset !== undefined){
//     botonReset.addEventListener("click", () => {
//         if(inputNumeroTurno instanceof HTMLInputElement){
//             inputNumeroTurno.value = "00";}
// });}

// const nuevoTurnoInput = document.getElementById ("nuevoTurno");
// const botonCambiarTurno = document.getElementById("botonCambiarTurno");
// const numeroTurnoDisplay = document.getElementById("numeroTurno");

// if (botonCambiarTurno !== null && botonCambiarTurno !== undefined && nuevoTurnoInput !== null && nuevoTurnoInput !== undefined) {
//     botonCambiarTurno.addEventListener("click", () => {
//         if (nuevoTurnoInput instanceof HTMLInputElement) {
//             let nuevoTurno = nuevoTurnoInput.value;

//             if (!isNaN(parseInt(nuevoTurno)) && numeroTurnoDisplay !== null && numeroTurnoDisplay !== undefined && numeroTurnoDisplay instanceof HTMLInputElement) {
//                 numeroTurnoDisplay.value = nuevoTurno.padStart(2, "0");
//             } else {
//                 console.error("Introduzca un valor numérico");
//             }
//         }
//     });
// }
