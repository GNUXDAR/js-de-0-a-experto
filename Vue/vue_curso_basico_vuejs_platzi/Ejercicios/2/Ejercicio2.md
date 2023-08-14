Práctica Módulo 3

    Armar un componente modal que se muestre al hacer click en un boton del componente padre (root) y que pueda ocultarse/cerrarse con otro boton dentro del componente modal

Hace fork de este CodePen para obtener la estructura básica del proyecto:
Consideraciones:

    El componente modal debe:
        Usar una propiedad title para poder establecer el titulo del modal.
        Definir un slot para poder establecer el body del modal.
        Tener un boton con una directiva v-on a un metodo que emita un evento llamado close.

    El componente root (Componente Principal) debe:
        Utilizar el component modal y mostrarlo solo cuando la propiedad showModal sea true.
        Definir una propiedad boolean llamada showModal que permite ocultar y mostrar el modal.
        Definir un método toggleModal que permita cambiar el valor de la propiedad showModal a su valor contrario (este metodo debe usarse con el boton “Show Modal”).
        Escuchar el evento close del modal y ejecutar el metodo toggleModal cuando este se emite.
        Establecer el contenido de title del modal usando una propiedad y el contenido del bodyusando slots.
