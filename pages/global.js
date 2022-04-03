//Dit is nodig om te weten op welke villa pagina de klant zich bevind
let villaNaam = document.getElementById("villaNaam").innerText;


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

//slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
}

//hierdoor veranderen de foto's elke 5 seconden
window.setInterval(function() {
  plusSlides(1);
}, 5000);


// Bied systeem
//local storage
let startPrijs;
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

//villa 1 Zeeweg 17
if (villaNaam == "Zeeweg 17") {
  document.getElementById("bieding_input").min = localStorage.getItem("hoogsteBedragVilla1");
  document.getElementById("prijs").innerText = "Te bieden vanaf € " + localStorage.getItem("hoogsteBedragVilla1") + " Euro";
}

//villa 1 Bergweg 38
if (villaNaam == "Bergweg 38") {
  document.getElementById("bieding_input").min = localStorage.getItem("hoogsteBedragVilla2");
  document.getElementById("prijs").innerText = "Te bieden vanaf € " + localStorage.getItem("hoogsteBedragVilla2") + " Euro";
}

//villa 1 Laan van Rhemen van Rhemenshuizen 13
if (villaNaam == "Laan van Rhemen van Rhemenshuizen 13") {
  document.getElementById("bieding_input").min = localStorage.getItem("hoogsteBedragVilla3");
  document.getElementById("prijs").innerText = "Te bieden vanaf € " + localStorage.getItem("hoogsteBedragVilla3") + " Euro";
}

function bod() {
  let bedrag = document.getElementById("bieding_input").value;
  let naam = document.getElementById("vnaam").value;

  //villa 1 Zeeweg 17
  if (villaNaam == "Zeeweg 17") {
    if(localStorage.getItem("prijs2Villa1") == "") {
      localStorage.setItem("prijs2Villa1", bedrag);
      localStorage.setItem("naam2Villa1", naam);
      localStorage.setItem("hoogsteBedragVilla1", ++bedrag);
    }
    else if(localStorage.getItem("prijs3Villa1") == "") {
      localStorage.setItem("prijs3Villa1", bedrag);
      localStorage.setItem("naam3Villa1", naam);
      localStorage.setItem("hoogsteBedragVilla1", ++bedrag);
    }
    else if(localStorage.getItem("prijs4Villa1") == "") {
      localStorage.setItem("prijs4Villa1", bedrag);
      localStorage.setItem("naam4Villa1", naam);
      localStorage.setItem("hoogsteBedragVilla1", ++bedrag);
    }
  }  
  //villa 1 Bergweg 38
  else if (villaNaam == "Bergweg 38") {
    if(localStorage.getItem("prijs2Villa2") == "") {
      localStorage.setItem("prijs2Villa2", bedrag);
      localStorage.setItem("naam2Villa2", naam);
      localStorage.setItem("hoogsteBedragVilla2", ++bedrag);
    }
    else if(localStorage.getItem("prijs3Villa2") == "") {
      localStorage.setItem("prijs3Villa2", bedrag);
      localStorage.setItem("naam3Villa2", naam);
      localStorage.setItem("hoogsteBedragVilla2", ++bedrag);
    }
    else if(localStorage.getItem("prijs4Villa2") == "") {
      localStorage.setItem("prijs4Villa2", bedrag);
      localStorage.setItem("naam4Villa2", naam);
      localStorage.setItem("hoogsteBedragVilla2", ++bedrag);
    }
  }
  //villa 1 Laan van Rhemen van Rhemenshuizen 13
  else if (villaNaam == "Laan van Rhemen van Rhemenshuizen 13") {
    if(localStorage.getItem("prijs2Villa3") == "") {
      localStorage.setItem("prijs2Villa3", bedrag);
      localStorage.setItem("naam2Villa3", naam);
      localStorage.setItem("hoogsteBedragVilla3", ++bedrag);
    }
    else if(localStorage.getItem("prijs3Villa3") == "") {
      localStorage.setItem("prijs3Villa3", bedrag);
      localStorage.setItem("naam3Villa3", naam);
      localStorage.setItem("hoogsteBedragVilla3", ++bedrag);
    }
    else if(localStorage.getItem("prijs4Villa3") == "") {
      localStorage.setItem("prijs4Villa3", bedrag);
      localStorage.setItem("naam4Villa3", naam);
      localStorage.setItem("hoogsteBedragVilla3", ++bedrag);
    }
  }
}

function stop() {
  //villa 1 Zeeweg 17
  if (villaNaam == "Zeeweg 17") {
    if(localStorage.getItem("prijs4Villa1") != "") {
      if(confirm("De veiling is over je kunt niet meer bieden. Wil je dat de veiling opnieuw start en wil je toch nog bieden klik dan op OK en als u dit niet wilt klik dan op de knop annuleren.")) {
        localStorage.setItem("prijs2Villa1", "");
        localStorage.setItem("naam2Villa1", "");
      
        localStorage.setItem("prijs3Villa1", "");
        localStorage.setItem("naam3Villa1", "");
      
        localStorage.setItem("prijs4Villa1", "");
        localStorage.setItem("naam4Villa1", "");
        startPrijs = document.getElementById("eerstePrijs").innerText;
        localStorage.setItem("hoogsteBedragVilla1", ++startPrijs);
        document.getElementById("bieding_inputVilla1").min = localStorage.getItem("hoogsteBedragVilla1");
        location.reload();
      }
      else {
        document.getElementById("formJS").action = "";
      }
    }
  }
  //villa 1 Bergweg 38
  else if (villaNaam == "Bergweg 38") {
    if(localStorage.getItem("prijs4Villa2") != "") {
      if(confirm("De veiling is over je kunt niet meer bieden. Wil je dat de veiling opnieuw start en wil je toch nog bieden klik dan op OK en als u dit niet wilt klik dan op de knop annuleren.")) {
        localStorage.setItem("prijs2Villa2", "");
        localStorage.setItem("naam2Villa2", "");
      
        localStorage.setItem("prijs3Villa2", "");
        localStorage.setItem("naam3Villa2", "");
      
        localStorage.setItem("prijs4Villa2", "");
        localStorage.setItem("naam4Villa2", "");
        startPrijs = document.getElementById("eerstePrijs").innerText;
        localStorage.setItem("hoogsteBedragVilla2", ++startPrijs);
        document.getElementById("bieding_inputVilla2").min = localStorage.getItem("hoogsteBedragVilla2");
        location.reload();
      }
      else {
        document.getElementById("formJS").action = "";
      }
    }
  }
  //villa 1 Laan van Rhemen van Rhemenshuizen 13
  else if (villaNaam == "Laan van Rhemen van Rhemenshuizen 13") {
    if(localStorage.getItem("prijs4Villa3") != "") {
      if(confirm("De veiling is over je kunt niet meer bieden. Wil je dat de veiling opnieuw start en wil je toch nog bieden klik dan op OK en als u dit niet wilt klik dan op de knop annuleren.")) {
        localStorage.setItem("prijs2Villa3", "");
        localStorage.setItem("naam2Villa3", "");
      
        localStorage.setItem("prijs3Villa3", "");
        localStorage.setItem("naam3Villa3", "");
      
        localStorage.setItem("prijs4Villa3", "");
        localStorage.setItem("naam4Villa3", "");
        startPrijs = document.getElementById("eerstePrijs").innerText;
        localStorage.setItem("hoogsteBedragVilla3", ++startPrijs);
        document.getElementById("bieding_inputVilla3").min = localStorage.getItem("hoogsteBedragVilla3");
        location.reload();
      }
      else {
        document.getElementById("formJS").action = "";
      }
    }
  }
}

//villa 1 Zeeweg 17
if (villaNaam == "Zeeweg 17") {
  if(localStorage.getItem("prijs2Villa1") != "") {
    document.getElementById("bod2").innerHTML = "<p>" + localStorage.getItem("naam2Villa1") + " heeft € " + localStorage.getItem("prijs2Villa1") + " Euro geboden op de Villa Zeeweg 17</p>";
    document.getElementById("bod2").style.display = "block";
  }
  if(localStorage.getItem("prijs3Villa1") != "") {
    document.getElementById("bod3").innerHTML = "<p>" + localStorage.getItem("naam3Villa1") + " heeft € " + localStorage.getItem("prijs3Villa1") + " Euro geboden op de Villa Zeeweg 17</p>";
    document.getElementById("bod3").style.display = "block";
  }
  if(localStorage.getItem("prijs4Villa1") != "") {
    document.getElementById("bod4").innerHTML = "<p>" + localStorage.getItem("naam4Villa1") + " heeft € " + localStorage.getItem("prijs4Villa1") + " Euro geboden op de Villa Zeeweg 17</p>";
    document.getElementById("bod4").style.display = "block";
  }
}
//villa 1 Bergweg 38
else if (villaNaam == "Bergweg 38") {
  if(localStorage.getItem("prijs2Villa2") != "") {
    document.getElementById("bod2").innerHTML = "<p>" + localStorage.getItem("naam2Villa2") + " heeft € " + localStorage.getItem("prijs2Villa2") + " Euro geboden op de Villa Bergweg 38</p>";
    document.getElementById("bod2").style.display = "block";
  }
  if(localStorage.getItem("prijs3Villa2") != "") {
    document.getElementById("bod3").innerHTML = "<p>" + localStorage.getItem("naam3Villa2") + " heeft € " + localStorage.getItem("prijs3Villa2") + " Euro geboden op de Villa Bergweg 38</p>";
    document.getElementById("bod3").style.display = "block";
  }
  if(localStorage.getItem("prijs4Villa2") != "") {
    document.getElementById("bod4").innerHTML = "<p>" + localStorage.getItem("naam4Villa2") + " heeft € " + localStorage.getItem("prijs4Villa2") + " Euro geboden op de Villa Bergweg 38</p>";
    document.getElementById("bod4").style.display = "block";
  }
}
//villa 1 Laan van Rhemen van Rhemenshuizen 13
else if (villaNaam == "Laan van Rhemen van Rhemenshuizen 13") {
  if(localStorage.getItem("prijs2Villa3") != "") {
    document.getElementById("bod2").innerHTML = "<p>" + localStorage.getItem("naam2Villa3") + " heeft € " + localStorage.getItem("prijs2Villa3") + " Euro geboden op de Villa Laan van Rhemen 13</p>";
    document.getElementById("bod2").style.display = "block";
  }
  if(localStorage.getItem("prijs3Villa3") != "") {
    document.getElementById("bod3").innerHTML = "<p>" + localStorage.getItem("naam3Villa3") + " heeft € " + localStorage.getItem("prijs3Villa3") + " Euro geboden op de Villa Laan van Rhemen 13</p>";
    document.getElementById("bod3").style.display = "block";
  }
  if(localStorage.getItem("prijs4Villa3") != "") {
    document.getElementById("bod4").innerHTML = "<p>" + localStorage.getItem("naam4Villa3") + " heeft € " + localStorage.getItem("prijs4Villa3") + " Euro geboden op de Villa Laan van Rhemen 13</p>";
    document.getElementById("bod4").style.display = "block";
  }
}
