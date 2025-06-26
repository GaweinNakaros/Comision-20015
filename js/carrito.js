let botonesComprar = document.getElementsByClassName('comprar');
   for (let i = 0; i < botonesComprar.length; i++) {
     botonesComprar[i].addEventListener('click', agregarProducto);
   }

// Vaciar carrito
document.getElementById('vaciar-carrito').addEventListener('click', function() {
     localStorage.removeItem('carrito');
     cargarCarrito();
});

function agregarProducto(event) {
    let producto = {
        id: event.target.getAttribute('data-id'),
        nombre: event.target.getAttribute('data-nombre'),
        precio: event.target.getAttribute('data-precio')
    };
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

function cargarCarrito() {
    let listaCarrito = document.getElementById('lista-carrito');
    let totalCarrito = document.getElementById('total-carrito');
    listaCarrito.innerHTML = '';
    totalCarrito.textContent = '0';

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = 0;    
   
    for (let i = 0; i < carrito.length; i++) {
    let producto = carrito[i];
        let li = document.createElement('li');
        li.textContent = producto.nombre + ' - $' + producto.precio;
        listaCarrito.appendChild(li);

        // Sumar el precio al total (convertimos a número)
        total += parseFloat(producto.precio) || 0;
    }

    // Mostrar el total redondeado a 2 decimales
    totalCarrito.textContent = total.toFixed(2);
}