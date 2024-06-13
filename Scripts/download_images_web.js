// Obtener el consentimiento del usuario para descargar imágenes
if (!confirm("¿Desea descargar las imágenes de esta página?")) {
  return;
}

// Seleccionar todas las imágenes en la página
const images = document.querySelectorAll("img");

// Recorrer cada imagen
for (const image of images) {
  // Verificar si la imagen es del mismo origen que la página actual
  if (image.src.startsWith(window.location.origin)) {
    // Obtener la URL de la imagen
    const imageUrl = image.src;

    // Crear un nuevo objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Abrir una solicitud GET a la URL de la imagen
    xhr.open("GET", imageUrl);

    // Establecer el tipo de respuesta a "blob" para recibir los datos de la imagen
    xhr.responseType = "blob";

    // Al tener éxito la respuesta
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Obtener los datos de la imagen como un blob
        const imageBlob = xhr.response;

        // Crear una nueva URL a partir del blob
        const imageURL = URL.createObjectURL(imageBlob);

        // Iniciar la descarga
        window.open(imageURL, "_blank");
      } else {
        console.error("Error al descargar la imagen:", imageUrl);
      }
    };

    // Enviar la solicitud
    xhr.send();
  }
}
