document.addEventListener('DOMContentLoaded', function () {
    const mensaje = document.getElementById('mensaje');
    const cambiarMensajeBtn = document.getElementById('cambiarMensaje');
    const backgroundImages = document.querySelector('.background-images');
    const images = backgroundImages.querySelectorAll('img');
    const enlaceButton = document.getElementById('enlaceButton'); // Agregamos referencia al botón
    let currentIndex = 0;
    const miAudio = document.getElementById('miAudio');

    miAudio.play();
    function changeBackground() {
        // Cambia la imagen actual
        currentIndex = (currentIndex + 1) % images.length;

        // Oculta las imágenes actuales
        images.forEach(function (img) {
            img.style.opacity = 0;
        });

        // Muestra la nueva imagen
        images[currentIndex].style.opacity = 1;
    }

    document.addEventListener('click', function () {
        miAudio.play();
        // Elimina el evento click después de la interacción para evitar la reproducción repetida
        document.removeEventListener('click', arguments.callee);
    });

    // Configura el cambio automático cada 5 segundos
    setInterval(changeBackground, 5000);

    // Llama a la función para establecer el fondo inicial
    changeBackground();




    var mensajes = [
        "Te amo",
        "No quiero perderte, no quiero dejar de escuchar tu risa",
        "no quiero dejar de leer tus mensajes todo el dia, no quiero dejar de tener la posibilidad de ver tus ojos cerca",
        "no quiero dejar de sentir com se acelera mi corazon cuando estas conmigo",
        "te amo y no quiero vivir con la compañia de tu ausencia",
        "JAMAS"
    ];

    cambiarMensajeBtn.addEventListener('click', function () {
        mensaje.style.opacity = 0; // Establecer la opacidad a 0 antes de cambiar el mensaje

        setTimeout(function () {
            var nuevoMensaje = obtenerMensajeSecuencial();
            mensaje.textContent = nuevoMensaje;
            mensaje.style.opacity = 1; // Establecer la opacidad a 1 después de cambiar el mensaje
             // Muestra u oculta el botón después de cambiar el mensaje
             if (currentIndex === images.length - 1) {
                enlaceButton.style.display = 'block';
            } else {
                enlaceButton.style.display = 'none';
            }
        }, 500); // 500 milisegundos, coincide con la duración de la transición
    });

    function obtenerMensajeSecuencial() {
        // Obtiene el mensaje en la posición actual y avanza al siguiente
        var mensajeActual = mensajes[currentIndex];
        currentIndex = (currentIndex + 1) % mensajes.length;
        return mensajeActual;
    }

    
});
