 /*  
            JS Fetch API
            La API Fetch es una interfaz moderna de JavaScript que permite realizar
            Consumo de una API RESTful utilizando la función fetch de JavaScript.
            Permite ralizar solicitudes HTTP a una api de forma asíncrona,
            lo que significa que no bloquea la ejecución del código mientras espera la respuesta.
            Se utiliza la función fetch para realizar una solicitud HTTP GET a la URL
        */
fetch('https://fakestoreapi.com/products')

        /*  
            Se convierte la respuesta de la solicitud en un objeto JSON, que es un 
            formato de intercambio de datos ligero y fácil de leerque facilita el procesamiento en javaScript.
        */
    .then(response => {
            if (!response.ok) {
                throw new Error('HTTP error! Status: ${response.status}');
            }
            return response.json(); // Convierte la respuesta a JSON
    })

        /*  
            Aqui se procesan lso datos obtenidos y se integran en el DOM 
            (Document Object Model), que es una interfaz de programación 
            que permite a los scripts acceder y actualizar el contenido, 
            la estructura y el estilo de un documento HTML o XML.
        */
    .then(data => {
            const constainer = 
        document.getElementById('productos-container');
        data.forEach(producto => {
            const productocard = `
                <div class="card">
                    <img src="${producto.image}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p> Precio: $${producto.price}</p>
                    <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
                </div>`;
            constainer.innerHTML += productocard;
            });
        }); 

        /*  
            En caso de que ocurra un error durante la solicitud o el procesamiento de los datos, 
            se captura y se muestra en la consola del navegador.
        */
    // .catch(error => console.error('Error al obtener datos:', error)); 