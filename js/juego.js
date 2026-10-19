let partidas = 0;
let ganadas = 0;
let empatadas = 0;
let perdidas = 0;



function PiedraPapelTijera(jugador) {
    const opciones = ["piedra", "papel", "tijera"];
    const maquina = opciones[Math.floor(Math.random() * opciones.length)];
    let mensaje;

    partidas++;
    
    if (jugador === maquina) {
        mensaje = "Empate";
        empatadas++;
    }

    else if (jugador == "piedra" && maquina == "tijera"  ||
        jugador == "tijera" && maquina == "papel"  ||
        jugador == "papel" && maquina == "piedra") 
        {
        mensaje = "Gana el jugador";
        ganadas++;
    }
    else {
        mensaje = "Gana la máquina";
        perdidas++;
    }

    document.getElementById("jugada-jugador").textContent =
        `Tu elección: ${jugador}`;
    document.getElementById("jugada-maquina").textContent =
        `Elección de la máquina: ${maquina}`;
    document.getElementById("mensaje-resultado").textContent = mensaje;

    document.getElementById("marcador").textContent =
        `Partidas jugadas: ${partidas}`;
    document.getElementById("ganadas").textContent = `Ganadas: ${ganadas}`;
    document.getElementById("empatadas").textContent = `Empatadas: ${empatadas}`;
    document.getElementById("perdidas").textContent = `Perdidas: ${perdidas}`;
    }


