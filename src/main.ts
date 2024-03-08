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

    const botonCambiarTurno = document.getElementById("botonCambiarTurno");
    if (botonCambiarTurno !==null && botonCambiarTurno !== undefined && botonCambiarTurno instanceof HTMLButtonElement){
          botonCambiarTurno.addEventListener("click", cambiarTurno);
    
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


    

document.addEventListener("DOMContentLoaded",() => {
    pintarTurno();
    eventos();
});



