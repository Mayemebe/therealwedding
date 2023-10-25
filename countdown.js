// Establecer la fecha objetivo del evento (año, mes - 1, día, hora, minuto, segundo)
const targetDate = new Date(2023, 11, 9, 13, 0, 59).getTime(); // Nota: El mes es 0-based, por lo que diciembre es 11.

// Actualizar el contador cada segundo
const interval = setInterval(() => {
    // Obtener la fecha y hora actual
    const currentDate = new Date().getTime();

    // Calcular la diferencia entre la fecha objetivo y la actual
    const timeLeft = targetDate - currentDate;

    if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
        return;
    }

    // Calcular días, horas, minutos y segundos restantes
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Mostrar el contador en los elementos de números
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);
