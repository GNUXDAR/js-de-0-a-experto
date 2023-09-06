<template>
  <div class="about">
    <h1>Mis Web's</h1>
    <a href="https://actecnology.com">
      <button class="btn btn-primary">AC Tecnology</button>
    </a>

    <a href="https://arturocabrera.com">
      <button class="btn btn-primary">Arturo Cabrera</button>
    </a>
  </div>
</template>

<style scoped lang="scss">
$primary: #1b44b8;

.btn-primary {
  color: #fff;
  background-color: $primary;
  border-color: $primary;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0056b3;
  border-color: #0056b3;
}


.btn-primary:not(:disabled):not(.disabled):active:focus,
.btn-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

</style>
