// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');

const frontal = document.querySelector('.tarjeta .frontal');
const posterior = document.querySelector('.tarjeta .posterior');


// Función para voltear la tarjeta
verDetallesButton.addEventListener('click', () => {
    frontal.style.transform = 'rotateY(180deg)'; // Oculta cara frontal
    posterior.style.transform = 'rotateY(0deg)';  // Muestra cara posterior
});
// Función para volver a la cara frontal
volverButton.addEventListener('click', () => {
    frontal.style.transform = 'rotateY(0deg)'; // Muestra cara frontal
    posterior.style.transform = 'rotateY(180deg)'; // Oculta cara posterior
});