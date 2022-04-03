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

    echo "<h2>We hebben je verzoek ontvangen ". $vnaam . "</h2>";
    echo "<p>We sturen je een bevesteging mail naar " . $email. "</p> " ;
    echo "<p>Check voor de zekerheid uw spam folder</p>";

    // de email variabelen worden aangemaakt.
    $to_email = $email;
    $subject = "Je verzoek betreffende ". $verzoek ."\n";
    $message = "Beste, ". $vnaam . "\n" . "We hebben uw bericht ontvangen! \n \n" . "We nemen zo snel mogelijk contact met u op dit telefoon nummer: \n" . $tel . "\n \n" . "Met vriendelijke groet, \n \n" . "Villas4u";

    $headers = "From: noreply @ Villas4U . com";
    mail($to_email,$subject,$message,$headers);

}
?>
