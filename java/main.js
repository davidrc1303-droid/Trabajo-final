document.addEventListener('DOMContentLoaded', function() {
    
    // ==============================================
    // 1. Interacción del Header al hacer Scroll
    // ==============================================
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ==============================================
    // 2. Funcionalidad Interactiva del Carrito (Simulación)
    // ==============================================
    const cartCountElement = document.getElementById('cartCount');
    let cartItemCount = 0;

    // Función para actualizar el contador
    function updateCartCount() {
        cartCountElement.textContent = cartItemCount;
        // Animación simple para notificar al usuario
        cartCountElement.classList.add('bg-warning');
        setTimeout(() => {
            cartCountElement.classList.remove('bg-warning');
        }, 500);
    }

    // Event listener para los botones "Añadir al Carrito"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            cartItemCount++;
            updateCartCount();
            alert('Producto añadido al carrito. Total de artículos: ' + cartItemCount);
        });
    });

    // ==============================================
    // 3. Validación y Manejo del Formulario de Contacto (Eficiente)
    // ==============================================
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            
            // 1. Prevenir envío si el formulario es inválido (Validación de Bootstrap/HTML5)
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                // Si la validación falla, Bootstrap mostrará los mensajes de 'invalid-feedback'
            } else {
                // 2. Si es válido, prevenir el envío real y simular el proceso
                event.preventDefault(); 
                
                // Muestra un mensaje de éxito
                formMessage.classList.remove('text-danger', 'alert', 'alert-danger');
                formMessage.classList.add('text-success', 'alert', 'alert-success');
                formMessage.textContent = '✅ ¡Mensaje enviado con éxito! En breve nos pondremos en contacto contigo.';
                formMessage.style.display = 'block';

                // Limpiar formulario después de un breve delay
                setTimeout(() => {
                    contactForm.reset();
                    // Opcional: remover la clase 'was-validated' después de limpiar
                    contactForm.classList.remove('was-validated'); 
                    formMessage.style.display = 'none';
                }, 3000);
            }

            // Añadir clase para mostrar estilos de validación de Bootstrap
            contactForm.classList.add('was-validated'); 
        });
    }

});