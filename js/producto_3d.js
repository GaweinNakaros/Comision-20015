const cards = document.querySelectorAll('.producto'); // Select all elements with the class 'producto'
cards.forEach(card => { // recorre en bucle cada elemento
    card.addEventListener('mousemove', (e) => { // agregamos un evento de movimiento del ratón
        const recrt = card.getBoundingClientRect(); // obtenemos el rectángulo que rodea al elemento
        const x = e.clientX - recrt.left;   // obtenemos la posición x del ratón relativo al elemento
        const y = e.clientY - recrt.top; // obtenemos la posición y del ratón relativo al elemento
        const centerx = recrt.width / 2;        // calculamos el centro del elemento en x
        const centery = recrt.height / 2;       //  calculamos el centro del elemento en y

        const rotateX = ((y - centery) / centery) * 18; // calculamos el ángulo de rotación en x
        const rotateY = ((x - centerx) / centerx) * 18; // calculamos el ángulo de rotación en y

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`; // aplicamos la transformación al elemento
    });
    card.addEventListener('mouseleave', () => { // agregamos un evento de salida del ratón
        card.style.transform = ''; // eliminamos la transformación al salir el ratón
    });
});

