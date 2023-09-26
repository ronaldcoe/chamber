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