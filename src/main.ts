
const inputNumeroTurno = document.getElementById ("numeroTurno") as HTMLInputElement;
const botonMas = document.getElementById("botonMas") as HTMLButtonElement;
const botonMenos = document.getElementById ("botonMenos") as HTMLButtonElement;
const botonReset = document.getElementById ("botonReset") as HTMLButtonElement;

botonMas.addEventListener ("click", ()=>{
    let numeroActual = Number(inputNumeroTurno.value) || 0;
    inputNumeroTurno.value = (numeroActual +1).toString().padStart(2, "0");
});

botonMenos.addEventListener("click", () => {
    let numeroActual = Number (inputNumeroTurno.value) || 0;
    inputNumeroTurno.value = (numeroActual - 1).toString().padStart(2, "0");
})

botonReset.addEventListener("click", () => {
    inputNumeroTurno.value = "00";
})

const nuevoTurnoInput = document.getElementById ("nuevoTurno") as HTMLInputElement;
const botonCambiarTurno = document.getElementById("botonCambiarTurno") as HTMLButtonElement;
const numeroTurnoDisplay = document.getElementById("numeroTurno") as HTMLInputElement;

botonCambiarTurno.addEventListener("click", () => {
    const nuevoTurno = nuevoTurnoInput.value;

    if(!isNaN (parseInt(nuevoTurno))) {
        numeroTurnoDisplay.value = nuevoTurno.padStart(2, "0");}
        
        else{
            console.error("introduzca un valor numérico");
        }
});