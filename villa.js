//scroll
window.addEventListener("scroll",function(){
    const target = document.querySelector('header');
    const image = document.querySelector('img');
    const hamb = document.querySelector('.hamburger');

    if(window.pageYOffset >= 10){
        target.style.backgroundColor = "rgba(38, 38, 38, 1)";
        image.style.height = "50px";
        image.style.marginTop = "13px";
        hamb.style.top = "40%";
    }
    else if(window.pageYOffset < 10){
        target.style.backgroundColor = "rgba(0,0,0,0)";
        image.style.height = "60px";
        image.style.marginTop = "15px";
        hamb.style.top = "50%";
    }

  },false);

//navbar

let teller = 0;

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
    if (teller == 0) {
        teller++;
        document.getElementById("lineOut1").id = "line1";
        document.getElementById("lineOut2").id = "line2";
        document.getElementById("lineOut3").id = "line3";
        body.style.overflow = "hidden";
    }
    else if (teller == 1) {
        teller--;
        document.getElementById("line1").id = "lineOut1";
        document.getElementById("line2").id = "lineOut2";
        document.getElementById("line3").id = "lineOut3";
        body.style.overflow = "visible";
    }
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

/* link kopiëren */
function copy(evt) {
    evt.preventDefault();
    navigator.clipboard.writeText(evt.target.getAttribute('href')).then(() => {
    }, () => {
    });
}
/* tooltip */
const tool = document.querySelector('.tooltiptext');

function tooltip(){
    tool.textContent = "Gekopiëerd!"
    setTimeout(function(){ tool.textContent = "Klik om te kopiëren" }, 3000);
}

if(localStorage.getItem("prijs2Villa1") == undefined) {
    //villa 1 Zeeweg 17
    localStorage.setItem("prijs2Villa1", "");
    localStorage.setItem("naam2Villa1", "");
    localStorage.setItem("prijs3Villa1", "");
    localStorage.setItem("naam3Villa1", "");
    localStorage.setItem("prijs4Villa1", "");
    localStorage.setItem("naam4Villa1", "");
    localStorage.setItem("hoogsteBedragVilla1", 2200001);

    //villa 2 Bergweg 38
    localStorage.setItem("prijs2Villa2", "");
    localStorage.setItem("naam2Villa2", "");
    localStorage.setItem("prijs3Villa2", "");
    localStorage.setItem("naam3Villa2", "");
    localStorage.setItem("prijs4Villa2", "");
    localStorage.setItem("naam4Villa2", "");
    localStorage.setItem("hoogsteBedragVilla2", 1989001);

    //villa 3 Laan van Rhemen van Rhemenshuizen 13
    localStorage.setItem("prijs2Villa3", "");
    localStorage.setItem("naam2Villa3", "");
    localStorage.setItem("prijs3Villa3", "");
    localStorage.setItem("naam3Villa3", "");
    localStorage.setItem("prijs4Villa3", "");
    localStorage.setItem("naam4Villa3", "");
    localStorage.setItem("hoogsteBedragVilla3", 2650001);
}

document.getElementById("prijsVilla1").innerText = "Startprijs: € " + localStorage.getItem("hoogsteBedragVilla1") + " k.k.";
document.getElementById("prijsVilla2").innerText = "Startprijs: € " + localStorage.getItem("hoogsteBedragVilla2") + " k.k.";
document.getElementById("prijsVilla3").innerText = "Startprijs: € " + localStorage.getItem("hoogsteBedragVilla3") + " k.k.";