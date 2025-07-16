document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Paso 1: Obtener las categorías disponibles
        const resCategorias = await fetch('https://fakestoreapi.com/products/categories');
        const categorias = await resCategorias.json();
        console.log('Categorías disponibles:', categorias);

        // Paso 2: Tomar las primeras 3 categorías
        const categoriasSeleccionadas = categorias.slice(0, 3);
        
        // Paso 3: Obtener productos para cada categoría
        const productosCarrusel1 = await obtenerProductosPorCategoria(categoriasSeleccionadas[0], 5);
        const productosCarrusel2 = await obtenerProductosPorCategoria(categoriasSeleccionadas[1], 5);
        const productosCarrusel3 = await obtenerProductosPorCategoria(categoriasSeleccionadas[2], 5);

        // Paso 4: Crear los carruseles con sus categorías
        crearCarrusel('carrusel1', productosCarrusel1, categoriasSeleccionadas[0]);
        crearCarrusel('carrusel2', productosCarrusel2, categoriasSeleccionadas[1]);
        crearCarrusel('carrusel3', productosCarrusel3, categoriasSeleccionadas[2]);

        // Paso 5: Actualizar los títulos de las categorías
        actualizarTitulosCarruseles(categoriasSeleccionadas);

    } catch (error) {
        console.error('Error:', error);
    }
});

// Función para obtener productos de una categoría específica
async function obtenerProductosPorCategoria(categoria, limite = 5) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${categoria}?limit=${limite}`);
        const productos = await response.json();
        console.log(`Productos de ${categoria}:`, productos.length);
        return productos;
    } catch (error) {
        console.error(`Error al obtener productos de ${categoria}:`, error);
        return [];
    }
}

// Función para crear un carrusel con productos de una categoría
function crearCarrusel(id, productos, categoria) {
    const contenedor = document.getElementById(id);
    if (!contenedor) return;

    // Limpiar contenedor
    contenedor.innerHTML = '';

    // Crear los items del carrusel
    productos.forEach((producto, idx) => {
        const item = document.createElement('div');
        item.className = 'carousel-item' + (idx === 0 ? ' active' : '');
        item.innerHTML = `
            <img src="${producto.image}" class="d-block w-100" alt="${producto.title}" style="height:200px;object-fit:contain;">
            <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                <h6>${producto.title.length > 30 ? producto.title.substring(0, 30) + '...' : producto.title}</h6>
                <p>$${producto.price}</p>
            </div>
        `;
        contenedor.appendChild(item);
    });
}

// Función para actualizar los títulos de los carruseles con los nombres de las categorías
function actualizarTitulosCarruseles(categorias) {
    // Buscar y actualizar títulos de manera más simple
    const titulos = document.querySelectorAll('.col-md-4 h5');
    
    if (titulos.length >= 3) {
        titulos[0].textContent = formatearNombreCategoria(categorias[0]);
        titulos[1].textContent = formatearNombreCategoria(categorias[1]); 
        titulos[2].textContent = formatearNombreCategoria(categorias[2]);
    }
}

// Función para formatear el nombre de la categoría (hacer más legible)
function formatearNombreCategoria(categoria) {
    // Convertir primera letra a mayúscula y reemplazar caracteres
    return categoria
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace("'s", 's');
}