document.addEventListener('DOMContentLoaded', () => {
    const cake = document.querySelector('.cake');
    const dots = document.querySelector('.dots');
    if (!cake || !dots) {
        console.error('Cake or dots element not found');
        return;
    }

    // Crear las capas de la torta
    for (let i = 0; i < 3; i++) {
        const layer = document.createElement('div');
        layer.classList.add('layer');
        cake.appendChild(layer);
    }

    // Crear la vela
    const candle = document.createElement('div');
    candle.classList.add('candle');
    const flame = document.createElement('div');
    flame.classList.add('flame');
    candle.appendChild(flame);
    cake.appendChild(candle);

    // Crear puntos decorativos
    for (let i = 0; i < 30; i++) { // Más puntos para un efecto festivo
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animationDelay = `${Math.random() * 4}s`;
        dots.appendChild(dot);
    }

     // Control de música
    audio.volume = 0.5; // Volumen al 50%
  audio.play().catch(error => {
    console.log('Autoplay blocked by browser, play manually:', error);
});

    playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause Music';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play Music';
    }
});
});