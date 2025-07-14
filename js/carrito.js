let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function renderCarrito() {
    const contenedor = document.getElementById('carrito-items');
    const totalSpan = document.getElementById('carrito-total');
    contenedor.innerHTML = '';
    let total = 0;
    // Recorre el carrito y crea los elementos HTML
    // idx es el índice del producto en el carrito, lo que permite identificarlo para sumar, restar o eliminar el producto
    carrito.forEach((item, idx) => {
        total += item.precio * item.cantidad;
        const div = document.createElement('div');// Crea un div para cada producto
        div.className = 'carrito-item';// Asigna una clase para estilos
        // Agrega el contenido HTML del producto
        // mediane font awesome se agrega un icono de eliminar
        // mediante bootstrap se agregan clases para estilos por ejemplo: btn, btn-sm, btn-success, btn-warning, btn-danger
        // Utiliza template literals para insertar los valores del producto
        // data-accion y data-id son atributos personalizados que se utilizan para identificar la acción y el producto por su id
        // la clase "acciones" contiene los botones para sumar, restar y eliminar el producto
        // la clase btn-success es para el botón de sumar, btn-warning para restar y btn-danger para eliminar
        // la clase fa fa-trash es para el icono de eliminar
        // la clase btn btn-sm es para que los botones sean pequeños
        // la clase btn-susucces para el color verde del botón de sumar, btn-warning para el color amarillo del botón de restar y btn-danger para el color rojo del botón de eliminar
        // i clase fa fa-trash es para el icono de eliminar, icono de la papelera
        div.innerHTML = `
            <img src="${item.imagen}" alt="${item.titulo}">
            <span class="titulo">${item.titulo}</span>
            <span class="precio">$${item.precio}</span>
            <div class="acciones">
                <span>${item.cantidad}</span>
                <button class="btn btn-sm btn-success" data-accion="sumar" data-id="${item.id}">+</button>
                <button class="btn btn-sm btn-warning" data-accion="restar" data-id="${item.id}">-</button>
                <button class="btn btn-sm btn-danger" data-accion="eliminar" data-id="${item.id}"><i class="fa fa-trash"></i></button>
            </div>
        `;
        contenedor.appendChild(div);    // Agrega el div al contenedor del carrito
    });

    totalSpan.textContent = total.toFixed(2); // Actualiza el total del carrito con dos decimales
    // Guarda el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
// Agrega eventos a los botones del carrito
// Utiliza event delegation para manejar los clicks en los botones del carrito
// Esto permite que los botones agregados dinámicamente también funcionen
// Escucha el evento click en el contenedor del carrito
document.getElementById('carrito-items').addEventListener('click', function(e) {
    // Si el click fue sobre el <i>, sube al botón padre
    const btn = e.target.closest('button[data-accion]');
    if (btn) {
        const id = parseInt(btn.dataset.id); // Usamos el id del producto
        const idx = carrito.findIndex(item => item.id === id); // Buscamos el índice por id
        if (idx === -1) return; // Si no encuentra el producto, no hace nada
        if (btn.dataset.accion === 'sumar') carrito[idx].cantidad++; // Suma uno a la cantidad del producto
        if (btn.dataset.accion === 'restar') {
            carrito[idx].cantidad--;
            if (carrito[idx].cantidad <= 0) carrito.splice(idx, 1);
        } // resta uno a la cantidad del producto, y si llega a cero lo elimina del carrito
        if (btn.dataset.accion === 'eliminar') carrito.splice(idx, 1); // eliminar el producto del carrito
        renderCarrito(); // Vuelve a renderizar el carrito después de modificarlo
    }
});

document.getElementById('finalizar-compra').addEventListener('click', () => {
    window.location.href = '../html/compra.html';
});

// Llama a renderCarrito al cargar la página
renderCarrito();

// Función para agregar productos al carrito desde la lista de productos
function agregarAlCarrito(producto) {
    const idx = carrito.findIndex(item => item.id === producto.id);
    if (idx >= 0) {
        carrito[idx].cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    renderCarrito();
}
window.agregarAlCarrito = agregarAlCarrito; // Para poder llamarla desde otros scripts