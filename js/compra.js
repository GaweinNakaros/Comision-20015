document.addEventListener("DOMContentLoaded", function () {

    // Lee el carrito y el total desde localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const detalleDiv = document.getElementById('detalle');
    const textareaCarrito = document.getElementById('carritoData');
    const textareaTotal = document.getElementById('totalCarrito');
    const formulario = document.getElementById('formulario');

    // Renderiza el resumen de la compra
    function renderResumen() {
        if (carrito.length === 0) {
            detalleDiv.innerHTML = '<p>No hay productos en el carrito.</p>';
            textareaCarrito.value = '';
            textareaTotal.value = '';
            return;
        }

        let total = 0;
        let html = '<h2>Productos seleccionados</h2><ul style="padding-left: 1.2em;">';
        carrito.forEach(item => {
            html += `<li>
                <strong>${item.titulo}</strong> x${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}
            </li>`;
            total += item.precio * item.cantidad;
        });
        html += `</ul><h3>Total: $${total.toFixed(2)}</h3>`;

        detalleDiv.innerHTML = html;

        // Guarda los datos en los textarea ocultos para enviar por Formspree
        textareaCarrito.value = carrito.map(item =>
            `${item.titulo} x${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}`
        ).join('\n');
        textareaTotal.value = total.toFixed(2);
    }

    renderResumen();

    // Validación y envío del formulario
    formulario.addEventListener('submit', function(event) {
        // Validar campos de contacto
        const nombreContacto = document.getElementById('nombre').value.trim();
        const emailContacto = document.getElementById('contactoEmail').value.trim();
        const telefonoContacto = document.getElementById('telefono').value.trim();

        if (!nombreContacto || !emailContacto || !telefonoContacto) {
            alert("Por favor, completa todos los campos de contacto antes de enviar.");
            event.preventDefault();
            return;
        }

        // Evitar la redirección por defecto de Formspree
        event.preventDefault();

        const form = event.target;
        const data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Vacía el carrito
                localStorage.removeItem('carrito');
                // Muestra mensaje de éxito
                form.innerHTML = "<p>¡Gracias por tu compra! Pronto nos pondremos en contacto.</p>";
            } else {
                form.innerHTML = "<p>Ocurrió un error al enviar el formulario. Intenta nuevamente.</p>";
            }
        }).catch(() => {
            form.innerHTML = "<p>Ocurrió un error al enviar el formulario. Intenta nuevamente.</p>";
        });
    });
});