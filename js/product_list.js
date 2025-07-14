document.addEventListener('DOMContentLoaded', async () => {
    const productList = document.querySelector('.product-list');
    if (!productList) return;

    try {
        // Trae los mismos 15 productos que el carrusel
        const res = await fetch('https://fakestoreapi.com/products?limit=15');
        const productos = await res.json();

        // Limpia el listado actual
        productList.innerHTML = '';

        productos.forEach(producto => {
            // Crea el contenedor del producto
            const div = document.createElement('div');
            div.className = 'producto';

            div.innerHTML = `
                <img src="${producto.image}" alt="${producto.title}" width="120">
                <p class="titulo">${producto.title}</p>
                <p class="precio">$${producto.price}</p>
                <button class="button">Agregar al carrito</button>
            `;
            productList.appendChild(div);

            const botonAgregar = div.querySelector('.button');
            botonAgregar.onclick = () => {
                agregarAlCarrito({
                    id: producto.id,
                    titulo: producto.title,
                    precio: producto.price,
                    imagen: producto.image 
                });
            };
        });
    } catch (error) {
        productList.innerHTML = '<p class="text-danger">Error al cargar productos.</p>';
        console.error(error);
    }
});