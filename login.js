function login() {
    const pw = prompt("Bitte Passwort eingeben:");
    if (pw === "Musik2026") {
        localStorage.setItem("loggedIn", "true");
        location.reload();
    } else {
        alert("Falsches Passwort");
    }
}

function checkLogin() {
    if (localStorage.getItem("loggedIn") === "true") {
        document.querySelectorAll(".protected").forEach(el => el.classList.remove("hidden"));
    }
}

checkLogin();

