// Función para crear confeti
function playConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const confettiPieces = 50;

    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.delay = Math.random() * 0.5 + 's';
        confetti.style.background = ['#fad608ff', '#f81c1cff', '#ffa500', '#ff69b4', '#00bfff'][Math.floor(Math.random() * 5)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confettiContainer.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3500);
    }
}

// Función para toggle de música
function toggleMusic() {
    const audio = document.getElementById('birthdayMusic');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Auto-generar confeti al cargar
window.addEventListener('load', () => {
    playConfetti();
    setTimeout(() => playConfetti(), 2000);
});

// Hacer click en las fotos para animar
document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });
});
