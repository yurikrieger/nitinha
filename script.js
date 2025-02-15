document.addEventListener("DOMContentLoaded", function () {
    
    function updateCountdown() {
        const startDate = new Date(2024, 1, 16, 0, 0, 0); // 13 de fevereiro de 2024
        const now = new Date();

        // Calcula a diferença em anos, meses e dias corretamente
        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();

        // Ajuste para evitar valores negativos nos meses e dias
        if (days < 0) {
            months -= 1;
            let previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += previousMonth.getDate();
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        // Calcula horas, minutos e segundos
        let totalSeconds = Math.floor((now - startDate) / 1000);
        let seconds = totalSeconds % 60;
        let totalMinutes = Math.floor(totalSeconds / 60);
        let minutes = totalMinutes % 60;
        let totalHours = Math.floor(totalMinutes / 60);
        let hours = totalHours % 24;

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


