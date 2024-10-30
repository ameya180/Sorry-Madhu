function revealMessage() {
    document.getElementById("surprise-message").classList.remove("hidden");
}

function revealBirthdayCountdown() {
    const birthdayMessage = document.getElementById("birthday-message");
    birthdayMessage.classList.toggle("hidden");
}
