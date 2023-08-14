Vue.component('modal', {
  template: `
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>title</h3>
          <div>body</div>
          <footer>
            <button>Cerrar</button>
          </footer>
        </div>
      </div>
    </div>`
})

new Vue({
  el: '#app'
})
