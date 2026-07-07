function getNextBirthday() {
    const now = new Date();

    let birthday = new Date(
        now.getFullYear(),
        6, // July (months start at 0)
        28,
        0,
        0,
        0
    );

    if (birthday < now) {
        birthday.setFullYear(now.getFullYear() + 1);
    }

    return birthday;
}

const birthday = getNextBirthday();

function updateCountdown() {
    const now = new Date();
    const distance = birthday - now;

    if (distance <= 0) {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("message").innerHTML =
            "🎂 Happy Birthday! 🎉";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
