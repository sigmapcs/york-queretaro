<?php
$nombre = $_POST["name"];
$telefono = $_POST["phone"];
$email = $_POST["email"];
$mensaje = $_POST["messages"];

$mensaje = "Nombre:      ". $_POST['name'] . "\n\n";
$mensaje .= "Telefono:    ". $_POST['phone'] . "\n\n";
$mensaje .= "Email:       ". $_POST['email'] . "\n\n\n";
$mensaje .= "Mensaje:     ". $_POST['messages'] . "\n\n";

$cabecera = "From: $nombre <$email> \r\n";
$cabecera .= "Reply-To: $email";

if($nombre!='' && $telefono!='' && $email!='' && $mensaje!=''){

  if(mail("contacto@airesyork.com", "Formuario desde airesyork.com", $mensaje, $cabecera)){
    echo true;
  }
  else{
    echo false;
  }
}
else{
  echo false;
}
// contacto@airesyork.com
