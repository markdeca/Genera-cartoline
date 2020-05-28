<?php

// Carica variabili
$to = $_POST['email'];
$subject = 'Genera cartoline';
$topic = $_POST['topic-drop'];
$message1 = $_POST['messaggio'];
// Imposta metodo di decifrazione testo email HTML
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


// Carica immagine in base al topic scelto
if ($topic=="Mare"){

$file = file_get_contents('https://source.unsplash.com/random/300x600/?beach');
$myfile = fopen("images/temp.jpeg", "w+") or die("Unable to open file!");
fwrite($myfile, $file);
fclose($myfile);
}
else if ($topic=="Montagna"){

$file = file_get_contents('https://source.unsplash.com/random/300x600/?mountain');
$myfile = fopen("images/temp.jpeg", "w+") or die("Unable to open file!");
fwrite($myfile, $file);
fclose($myfile);
}

else if ($topic=="Relax"){
$file = file_get_contents('https://source.unsplash.com/random/300x600/?relax');
$myfile = fopen("images/temp.jpeg", "w+") or die("Unable to open file!");
fwrite($myfile, $file);
fclose($myfile);
}

// Rileva indirizzo host ed invia email HTML
$url=$_SERVER['SERVER_NAME'];
$message2='<br><br><br><img src="http://'.$url.'/images/temp.jpeg">';

$message=$message1.$message2;

mail($to,$subject,$message,$headers);

// Anteprima immagine inviata
header('Location: nextpage.html');
?>




