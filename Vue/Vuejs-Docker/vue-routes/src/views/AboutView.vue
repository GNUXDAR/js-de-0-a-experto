<template>
  <div class="about">
    <h1>routers</h1>
    <p>
      El término "router" se utiliza comúnmente en el contexto del desarrollo web y se refiere a un componente o módulo que se encarga de gestionar las rutas y la navegación en una aplicación web. Los routers son especialmente relevantes en el desarrollo de aplicaciones de una sola página (SPA) y frameworks de JavaScript como Vue.js, React y Angular.

      En el contexto de Vue.js, "router" generalmente se refiere a Vue Router, que es el enrutador oficial de Vue.js. Vue Router permite crear aplicaciones de una sola página con múltiples vistas y navegación basada en URL. Algunas de las funcionalidades que proporciona Vue Router incluyen:
    </p>
  <ol>
    <li>Enrutamiento basado en URL: Permite definir rutas y asociar componentes a esas rutas. Cuando un usuario navega a una URL específica, Vue Router carga el componente correspondiente.</li>
    <li>Navegación programática: Permite navegar entre vistas programáticamente mediante métodos y transiciones de ruta.</li>
    <li>Rutas anidadas: Es posible crear rutas anidadas para estructurar una aplicación en secciones o páginas secundarias.</li>
    <li>Paso de parámetros: Vue Router permite pasar parámetros dinámicos en las URL para personalizar la visualización de los componentes.</li>
    <li>Rutas con nombres: Las rutas pueden tener nombres para facilitar la navegación y generación de enlaces.</li>
    <li>Guards de navegación: Vue Router proporciona guards (ganchos) de navegación que permiten controlar y proteger la navegación entre rutas.</li>
    <li>Historial de navegación: Gestiona el historial de navegación del navegador para permitir la navegación hacia adelante y hacia atrás.</li>
    <li>Navegación con animaciones: Permite agregar transiciones y animaciones al cambiar de una vista a otra.</li>
  </ol>

  <p>
    En resumen, un "router" en el contexto de Vue.js se refiere a Vue Router, una biblioteca que facilita la gestión de la navegación y las rutas en una aplicación web desarrollada con Vue.js. Esta herramienta es esencial para crear aplicaciones de una sola página con múltiples vistas y una experiencia de usuario fluida.
  </p>
  </div>
</template>

<style scoped lang="scss">
$colorLetter: #0c693e;
ol {
  li {
    color: $colorLetter;
  }
}
</style>
