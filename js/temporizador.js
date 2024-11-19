const temporizador = document.querySelector("form")
temporizador.addEventListener("submit",enviarForm)

const horas = document.getElementById("horasHTML")
const minutos = document.getElementById("minutosHTML")
const segundos = document.getElementById("segundosHTML")

let tiempo

const botonIniciarTiempo = document.getElementById("botonIniciar")
const botonPararTiempo = document.getElementById("botonPausar")
const botonReiniciarTiempo = document.getElementById("botonReiniciar")
const botonTemporizador = document.getElementById("botonTempo")

botonPararTiempo.addEventListener("click",() => {clearInterval(tiempo); botonIniciarTiempo.classList.remove("disabled"); botonPararTiempo.classList.add("disabled")})

botonIniciarTiempo.addEventListener("click",() => {tiempo = setInterval(empezarTiempo,1000); botonIniciarTiempo.classList.add("disabled"); botonPararTiempo.classList.remove("disabled")})

botonReiniciarTiempo.addEventListener("click",reiniciarTiempo)


function enviarForm(e)
{
    e.preventDefault()

    const inputHoras = document.getElementById("horas")
    const inputMinutos = document.getElementById("minutos")
    const inputSegundos = document.getElementById("segundos")

    if(inputHoras.value === "" && inputMinutos.value === "" && inputSegundos.value === "")
    {
        alert(`No ingresaste ningun tiempo.`)
        return
    }

    if(inputHoras.value === "")
    {
        inputHoras.value = "00"
    }
    if(inputMinutos.value === "")
    {
        inputMinutos.value = "00"
    }
    if(inputSegundos.value === "")
    {
        inputSegundos.value = "00"
    }

    horas.innerText = inputHoras.value
    minutos.innerText = inputMinutos.value
    segundos.innerText = inputSegundos.value

    tiempo = setInterval(empezarTiempo,1000)
    botonTemporizador.classList.add("disabled")
    botonIniciarTiempo.classList.add("disabled")
}

function empezarTiempo()
{
    if (segundos.innerText > 0) 
    {
        segundos.innerText = (segundos.innerText - 1).toString().padStart(2, "0");
    } 
    else 
    {
        // Si los segundos llegan a 0, restar 1 minuto y resetear segundos
        if (minutos.innerText > 0) 
        {
            minutos.innerText = (minutos.innerText - 1).toString().padStart(2, "0");
            segundos.innerText = 59;
        } 
        else 
        {
            // Si los minutos llegan a 0, restar 1 hora y resetear minutos
            if (horas.innerText > 0) 
            {
                horas.innerText = (horas.innerText - 1).toString().padStart(2, "0");
                minutos.innerText = 59;
                segundos.innerText = 59;
            } 
            else 
            {
                // Si el temporizador llega a 0, detener el proceso
                clearInterval(tiempo);
                alert("¡El tiempo ha terminado!");

                // Rehabilitar los botones
                botonTemporizador.classList.remove("disabled");
                botonIniciarTiempo.classList.remove("disabled");

                // Borramos los valores de los inputs
                document.getElementById("horas").value = "";
                document.getElementById("minutos").value = "";
                document.getElementById("segundos").value = "";

                // Opcional: Resetear el reloj visual a 00:00:00
                horas.innerText = "00";
                minutos.innerText = "00";
                segundos.innerText = "00";
            }
        }
    }
}

function reiniciarTiempo()
{
    clearInterval(tiempo);
    horas.innerText = "00"
    minutos.innerText = "00"
    segundos.innerText = "00"

    document.getElementById("horas").value = "";
    document.getElementById("minutos").value = "";
    document.getElementById("segundos").value = "";

    botonTemporizador.classList.remove("disabled");
    botonIniciarTiempo.classList.remove("disabled");
    botonPararTiempo.classList.remove("disabled");

    alert(`Se reinició el tiempo, vuelve a ingresar otro.`)
}