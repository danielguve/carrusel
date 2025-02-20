const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const carousel = document.querySelector('.carousel');
const totalImages = carousel.children.length;  // Total de imágenes = 3
let index = 0;

// Actualizar estado de los botones
function updateNavigationButtons() {
    prevButton.disabled = index === 0;
    nextButton.disabled = index === totalImages - 1;
}

// Función para mostrar la siguiente imagen
function showNext() {
    if (index < totalImages - 1) {
        index++;
        carousel.style.transform = `translateX(-${index * 100}vw)`;  // Mueve el carrusel usando el 100% del ancho de la pantalla
    }
    updateNavigationButtons();
}

// Función para mostrar la imagen anterior
function showPrev() {
    if (index > 0) {
        index--;
        carousel.style.transform = `translateX(-${index * 100}vw)`;  // Mueve el carrusel usando el 100% del ancho de la pantalla
    }
    updateNavigationButtons();
}

// Eventos de los botones de navegación
nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);

// Iniciar estado de los botones
updateNavigationButtons();
