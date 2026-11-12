function cambiamodo() {
  const enlace = document.getElementById("tema-oscuro");
  enlace.disabled = !enlace.disabled;
}

// 1. Función para cambiar el tamaño del texto dinámicamente
let textoGrande = false;
function cambiarTamano() {
  const parrafo = document.getElementById("texto-principal");
  if (!textoGrande) {
    parrafo.style.fontSize = "1.4rem";
    parrafo.style.fontWeight = "600";
    textoGrande = true;
  } else {
    parrafo.style.fontSize = "1rem";
    parrafo.style.fontWeight = "normal";
    textoGrande = false;
  }
}

// 2. Función que crea y añade tarjetas visuales con frases motivadoras
const frases = [
  "🚀 ¡Estás dominando HTML, CSS y JavaScript!",
  "🎨 El modo oscuro reduce la fatiga visual y ahorra batería.",
  "⚡ JavaScript permite modificar cualquier elemento de la web al instante.",
  "💻 Sigue practicando: cada línea de código mejora tu proyecto."
];
let indice = 0;

function agregarTarjeta() {
  const contenedor = document.getElementById("contenedor-mensajes");
  
  // Creamos un nuevo elemento HTML desde cero
  const nuevaTarjeta = document.createElement("div");
  nuevaTarjeta.className = "tarjeta-dinamica";
  nuevaTarjeta.innerHTML = `<p>${frases[indice]}</p>`;
  
  contenedor.appendChild(nuevaTarjeta);
  
  // Avanzamos a la siguiente frase de la lista
  indice = (indice + 1) % frases.length;
}
