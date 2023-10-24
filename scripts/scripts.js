let date = new Date;


if(date.getDay() == 1 || date.getDay() == 2) {
    document.querySelector('#notification').style.padding = "10px";
    document.querySelector("#notification").innerHTML = '<i class="fa-solid fa-handshake" style="color:#1659a4">  </i> <a href="/">Join the Guayaquil Chamber today!</a>';
}



document.querySelector(".lastUpdated").innerHTML = `<span>&copy ${date.getFullYear()} Guayaquil Chamber of Commerce</span> <span class="footer_bars">|</span> <span>Ronald Coello</span> <span class="footer_bars">|</span><span> WDD 230 Project Example</span><span class="footer_bars">|</span><span>Last updated: ${document.lastModified}</span>`



function toggleMenu() {
    document.querySelector('nav ul').classList.toggle('active');
    document.querySelector('.fa-bars').classList.toggle('active');
    document.querySelector('.fa-xmark').classList.toggle('active');
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu)




// DARK MODE 
let darkMode = document.querySelector("#dark_mode")
function toggleDarkMode() {
    if(darkMode.textContent == "Dark 🌙") {
        document.documentElement.style.setProperty('--containers-background', "#1E1E1E");
        document.documentElement.style.setProperty('--body-background-color', "#121212");
        document.documentElement.style.setProperty('--blue', "#121212");
        document.documentElement.style.setProperty('--dark-blue', "white");
        document.documentElement.style.setProperty('--text-color', "white");
        document.documentElement.style.setProperty('--nav-bar-color', "#1E1E1E");
        document.documentElement.style.setProperty('--footer-color', "#1E1E1E");
        document.documentElement.style.setProperty('--footer-color-text', "white");
        document.documentElement.style.setProperty('--logo-footer-filter', "100");
        document.documentElement.style.setProperty('--social-footer-filter', "100");
        darkMode.textContent = "Light ☀️"
    } else {
        document.documentElement.style.setProperty('--containers-background', "white");
        document.documentElement.style.setProperty('--body-background-color', "#EEF5F9");
        document.documentElement.style.setProperty('--blue', "#2a2760");
        document.documentElement.style.setProperty('--dark-blue', "#2a2760");
        document.documentElement.style.setProperty('--text-color', "#525254");
        document.documentElement.style.setProperty('--nav-bar-color', "#2a2760");
        document.documentElement.style.setProperty('--footer-color', "#f5f5f5");
        document.documentElement.style.setProperty('--footer-color-text', "#1E1E1E");
        document.documentElement.style.setProperty('--logo-footer-filter', "0");
        darkMode.textContent = "Dark 🌙"
    }
   
   
}

darkMode.addEventListener("click", toggleDarkMode)