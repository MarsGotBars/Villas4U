<?php

if (isset($_POST["submit"]))

{

    // de namen worden uit het formulier gehaald.

    $vnaam= $_POST["vnaam"];

    $anaam = $_POST["anaam"];

    $email = $_POST["email"];

    $tel = $_POST["tel"];

    $adres = $_POST ['adres'];

    // wanneer er een radio button wordt geselecteerd wordt de value uitgelezen

    $verzoek= $_POST ["opties"];



    // de email variabelen worden aangemaakt.

    $to_email = $email;

    $subject = "Je verzoek betreffende ". $verzoek ."\n";

    $message = "Beste, ". $vnaam . "\n" . "We hebben uw bericht ontvangen! \n \n" . "We nemen zo snel mogelijk contact met u op dit telefoon nummer: \n" . $tel . "\n \n" . "Met vriendelijke groet, \n \n" . "Villas4u";



    $headers = "From: noreply @ Villas4U . com";

    mail($to_email,$subject,$message,$headers);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <title>Villas4U | Contact</title>
</head>
<body>
    <section class="top">
        <header>
            <nav>
                <section class="hamburger">
                    <section class="line" id="lineOut1"></section>
                    <section class="line" id="lineOut2"></section>
                    <section class="line" id="lineOut3"></section>
                </section>
                <ul class="nav-links">
                    <li><a href="../../index.html">Home</a></li>
                    <li><a href="../../index.html#content">Villas</a></li>
                    <li><a class="selected" href="index.html">Contact</a></li>
                </ul>
                <section class="logo">
                    <a href="../../index.html">
                    <img src="media/logo2.png">
                    </a>
                </section>
            </nav> 
        </header>
    </section>
    <section class="bottom">
        <main id="content" data-aos="zoom-in" data-aos-delay="60" data-aos-easing="ease">
            <article id="bericht">
                <?php
                    echo "<h2 id='titleBericht'>We hebben je verzoek ontvangen ". $vnaam . "</h2> <br/>";

                    echo "<p class='pBericht'>We sturen je een bevesteging mail naar " . $email . "</p>" ;
                
                    echo "<p class='pBericht'>Check voor de zekerheid uw spam folder</p>";
                ?>
            <article>
        </main>
        <footer>
            <p>?? Villas4U 2021</p>
            <aside>
                <a href="https://www.instagram.com/" target="_blank"><img src="../../svg/instagram.svg" alt=""></a>
                <figure class="tooltip" onclick="tooltip()">
                    <!-- tooltip tekst -->
                    <span class="tooltiptext">Klik om te kopi??ren</span>
                    <img href="https://www.youtube.com/" onclick="copy(event)"src="../../svg/share-2.svg" alt="">
                </figure>
                <a href="https://www.facebook.com/" target="_blank"><img src="../../svg/facebook.svg" alt=""></a>
                <a href="https://www.linkedin.com/" target="_blank"><img src="../../svg/linkedin.svg" alt=""></a>
            </aside>
        </footer>
        <p hidden class="hidden">
            Gemaakt door Matthias, Delano en Marcin.
        </p>
    </section>
    <script src="villa.js"></script>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>
    <script src="../../maker.js"></script>
</body>
</html>