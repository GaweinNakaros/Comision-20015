document.addEventListener('DOMContentLoaded', async () => {
    const carouselInner = document.querySelector('.carousel-inner'); //busca el contenedor del carrusel
    let cantidad = 10; // Variable para definir la cantidad de productos a mostrar
    if (!carouselInner) return; //si no existe el contenedor, no hace nada

    try {

        const res = await fetch('https://fakestoreapi.com/products?limit=cantidad'); 
        // llamo a la API de productos, limitando la cantidad mediantre la variable cantidad
        const productos = await res.json(); //convertimos la respuesta a JSON

        // Limpia los items existentes, esto es para evitar duplicados si se recarga la página
        carouselInner.innerHTML = '';

        productos.forEach((producto, idx) => { // Recorre cada producto y crea un item del carrusel
            const item = document.createElement('div');     // Crea un nuevo elemento div para cada producto
            item.className = 'carousel-item' + (idx === 0 ? ' active' : ''); // Añade la clase 'active' al primer item
            // Añade el contenido del producto al item
            // Utiliza template literals para insertar el HTML del producto
            item.innerHTML = `
                <img src="${producto.image}" class="d-block w-100" alt="${producto.title}" style="height:300px;object-fit:contain;">
                <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                    <h5>${producto.title}</h5>
                    <p>$${producto.price}</p>
                </div>
            `;
            // Añade el item al contenedor del carrusel
            carouselInner.appendChild(item);
        });
    } catch (error) {
        carouselInner.innerHTML = '<div class="carousel-item active"><div class="alert alert-danger">Error al cargar productos</div></div>';// muestra un mensaje de error si falla la petición
        console.error(error);
    }
});