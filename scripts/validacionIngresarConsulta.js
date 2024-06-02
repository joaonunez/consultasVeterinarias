(function () {
  'use strict'

  // Selecciona todos los formularios que tienen la clase 'needs-validation'
  const forms = document.querySelectorAll('.needs-validation')

  // Recorre todos los formularios y evita el envío en caso de que sean inválidos
  Array.prototype.slice.call(forms)
      .forEach(function (form) {
          form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
              } else {
                  event.preventDefault(); // Prevenir la recarga de la página
                  ingresarConsulta(); // Ejecutar tu función personalizada
              }

              form.classList.add('was-validated')
          }, false)
      })
})()