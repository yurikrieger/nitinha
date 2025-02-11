document.addEventListener("DOMContentLoaded", function () {
    
    function updateCountdown() {
        const startDate = new Date(2024, 1, 16, 0, 0, 0); // 16 de fevereiro de 2024
        const now = new Date();
        const diff = now - startDate; // Diferença em milissegundos

        let totalSeconds = Math.floor(diff / 1000);
        let seconds = totalSeconds % 60;
        let totalMinutes = Math.floor(totalSeconds / 60);
        let minutes = totalMinutes % 60;
        let totalHours = Math.floor(totalMinutes / 60);
        let hours = totalHours % 24;
        let totalDays = Math.floor(totalHours / 24);
        let years = Math.floor(totalDays / 365);
        let months = Math.floor((totalDays % 365) / 30);
        let days = totalDays % 30;

        // Atualiza o HTML
        document.getElementById("year").textContent = String(years).padStart(2, "0");
        document.getElementById("month").textContent = String(months).padStart(2, "0");
        document.getElementById("day").textContent = String(days).padStart(2, "0");
        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";

        document.getElementById("floating-hearts").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(updateCountdown, 1000); // Atualiza a cada segundo
    setInterval(createHeart, 500);

    updateCountdown(); // Atualiza imediatamente ao carregar
});

const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

playButton.addEventListener("click", () => {
    audio.play();
});

pauseButton.addEventListener("click", () => {
    audio.pause();
});


