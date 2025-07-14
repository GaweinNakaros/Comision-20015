document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('productos');
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const productos = await res.json();

        productos.forEach(producto => {
            const card = document.createElement('div');
            card.className = "card";
            card.style.width = "18rem";
            card.style.display = "inline-block";
            card.style.margin = "10px";
            card.innerHTML = `
                <img src="${producto.image}" class="card-img-top" style="height:150px;object-fit:contain;">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">$${producto.price}</p>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        container.textContent = "Error al cargar productos";
        console.error(error);
    }
});