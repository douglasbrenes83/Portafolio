

document.addEventListener("DOMContentLoaded", function() {
    // Aquí va tu código JavaScript que interactúa con el DOM
    const miElemento = document.getElementById("miElemento");
    if (miElemento) {
        miElemento.addEventListener("click", function() {
            console.log("Elemento clickeado");
        });
    }
});

// Función para agregar la clase 'visible' cuando se hace scroll
window.addEventListener('scroll', function() {
    var timelineItems = document.querySelectorAll('.timeline-item');
  
    timelineItems.forEach(function(item) {
      var rect = item.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        item.classList.add('visible');
      }
    });
  });