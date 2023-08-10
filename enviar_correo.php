<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["name"];
    $correo = $_POST["email"];
    $mensaje = $_POST["message"];
    
    // Configurar los datos del correo corporativo
    $destinatario = "styp611@outlook.com";
    $asunto = "Nuevo mensaje de contacto de personal website";
    
    // Construir el contenido del correo
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo electrónico: $correo\n";
    $contenido .= "Mensaje:\n$mensaje";
    
    // Headers del correo
    $headers = "From: $correo\r\n";
    $headers .= "Reply-To: $correo\r\n";
    
    // Enviar el correo
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        // Redireccionar a una página de confirmación
        header("Location: confirmacion.html");
        exit();
    } else {
        echo "Hubo un problema al enviar el mensaje.";
    }
}
?>
