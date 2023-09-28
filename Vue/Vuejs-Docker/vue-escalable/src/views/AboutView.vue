<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Layouts</h1>
    <ul>
      <li>Los "layouts" en Vue 3 son componentes que actúan como plantillas para organizar la estructura general de tu aplicación. Pueden contener áreas de contenido comunes, como encabezados, barras laterales, pies de página, etc.</li>
      <li>Los layouts son útiles cuando deseas mantener un diseño coherente en toda tu aplicación. Puedes tener múltiples layouts para diferentes secciones de tu sitio web.</li>
      <li>  Un layout suele definirse como un componente de Vue y se utiliza como un envoltorio para otros componentes.</li>
    </ul>

    <h1>Slots</h1>
    <ul>
      <li>Los "slots" son una característica fundamental de Vue que te permite pasar contenido dinámico a un componente desde su instancia padre.</li>
      <li>Los slots se utilizan para insertar contenido personalizado en un componente, lo que hace que los componentes sean reutilizables y versátiles.</li>
      <li>Puedes definir slots en un componente y luego llenarlos con contenido cuando utilices ese componente en otros lugares.</li>
    </ul>

    <h1>Composables</h1>
    <ul>
      <li>Los "composables" son una forma de encapsular la lógica de Vue en funciones reutilizables. Se utilizan para separar y organizar la lógica en tu aplicación.</li>
      <li>Los composables son funciones que puedes importar y utilizar en tus componentes para llevar a cabo tareas específicas, como llamadas a la API, gestión de estado, validación, etc.</li>
      <li>Los composables están diseñados para ser compartidos entre componentes y promueven la reutilización de código.</li>
      <li>Los composables a menudo se crean como funciones que devuelven datos calculados o funciones para interactuar con esos datos.</li>
    </ul>
  </div>
</template>
