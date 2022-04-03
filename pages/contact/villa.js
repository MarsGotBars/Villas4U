
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

//copy link
function copy(evt) {
    evt.preventDefault();
    navigator.clipboard.writeText(evt.target.getAttribute('href')).then(() => {
      /* clipboard successfully set */
    }, () => {
      /* clipboard write failed */
    });
}

//er wordt een const aangemaakt die alle opties selecteert
const formulier = document.querySelectorAll(".opties");

// er wordt een forloop aangemaakt om de lengte van de radiobuttons te bekijken
 for (let index = 0; index < formulier.length; index++) {
     //er wordt een addeventlistener aangemaakt als de pagina veranderdt wordt
     formulier[index].addEventListener("change", function checkoptie() {
         //er worden if statements aangemaakt om de gekozen optie te laten zie in de css 
         button.disabled = false;
         button.value = "verstuur"
        if (formulier[index].value == "contact") {
            document.getElementById("contact").style.display = "inline";
            document.getElementById("kalender").style.display = "none";
            document.getElementById("bieding").style.display = "none";
            document.getElementById("bieding_input").value = "";
            button.disabled = false;
            button.value = "verstuur";
        }
        else if (formulier[index].value == "afspraak") {
            document.getElementById("kalender").style.display = "inline";
            document.getElementById("contact").style.display = "none";
            document.getElementById("bieding").style.display = "none";
            document.getElementById("bieding_input").value = "";
            button.disabled = false;
            button.value = "verstuur";
        }
    });
 }     

 const button = document.querySelector("#verstuur");
// wanneer de onblur getriggerd wordt wordt er een functie aangeroepen
function getal(){
    if(document.getElementById("bieding_input").value <= 1000000){
    console.log(bieding);
    button.disabled = true;
    button.value = "Vul een bedrag boven de 1 miljoen in!"
    }
    else{
        button.disabled = false;
        button.value = "verstuur";
    }
}
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
  console.error("De form verstuurt ook echt een mail, deze krijgt u binnen in uw spam folder!")


