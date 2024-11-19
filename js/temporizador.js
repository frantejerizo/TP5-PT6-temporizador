const temporizador = document.querySelector("form")
temporizador.addEventListener("submit",enviarForm)

const horas = document.getElementById("horasHTML")
const minutos = document.getElementById("minutosHTML")
const segundos = document.getElementById("segundosHTML")

let tiempo

// horas.innerText= "12"
// minutos.innerText= "12"
// segundos.innerText= "12"

const botonIniciarTiempo = document.getElementById("botonIniciar")
const botonPararTiempo = document.getElementById("botonPausar")
const botonReiniciarTiempo = document.getElementById("botonReiniciar")
const botonTemporizador = document.getElementById("botonTempo")

botonPararTiempo.addEventListener("click",() => {clearInterval(empezarTiempo); botonIniciarTiempo.classList.remove("disabled")})


function enviarForm(e)
{
    e.preventDefault()

    const inputHoras = document.getElementById("horas")
    const inputMinutos = document.getElementById("minutos")
    const inputSegundos = document.getElementById("segundos")

    horas.innerText = inputHoras.value
    minutos.innerText = inputMinutos.value
    segundos.innerText = inputSegundos.value

    tiempo = setInterval(empezarTiempo,1000)
}

function empezarTiempo()
{
    botonTemporizador.classList.add("disabled")
    botonIniciarTiempo.classList.add("disabled")

    if (segundos.innerText > 0) 
    {
        segundos.innerText = (segundos.innerText - 1).toString().padStart(2, "0");;
    } 
    else 
    {
        // Si los segundos llegan a 0, restar 1 minuto y resetear segundos
        if (minutos.innerText > 0) 
        {
            minutos.innerText = (minutos.innerText - 1).toString().padStart(2, "0");;
            segundos.innerText = 59;
        } 
        else 
        {
            // Si los minutos llegan a 0, restar 1 hora y resetear minutos
            if (horas.innerText > 0) 
            {
                horas.innerText = (horas.innerText - 1).toString().padStart(2, "0");;
                minutos.innerText = 59;
                segundos.innerText = 59;
            } 
            else 
            {
                // Si el temporizador llega a 0, detener el proceso
                clearInterval(temporizador);
                alert("¡El tiempo ha terminado!");

                // Rehabilitar los botones
                botonTemporizador.classList.remove("disabled");
                botonIniciarTiempo.classList.remove("disabled");
            }
        }
    }
}