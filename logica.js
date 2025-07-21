// Inicia las animaciones AOS
AOS.init({
  duration: 1000,      // tiempo de la animación
  once: true           // solo anima la primera vez
});

// Año automático en el footer
document.getElementById("anio").textContent = new Date().getFullYear();
