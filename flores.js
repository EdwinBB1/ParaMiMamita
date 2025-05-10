function crearFlor() {
    const flor = document.createElement('div');
    flor.classList.add('flor');
    flor.style.left = Math.random() * 100 + 'vw';
    flor.style.animationDuration = (5 + Math.random() * 5) + 's';
    document.body.appendChild(flor);

    setTimeout(() => {
        flor.remove();
    }, 10000);
}

setInterval(crearFlor, 300);
