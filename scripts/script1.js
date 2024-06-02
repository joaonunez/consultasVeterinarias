(function () {
    'use strict'

    // Selecciona todos los formularios que tienen la clase 'needs-validation2'
    const forms = document.querySelectorAll('.needs-validation2');

    // Selecciona el botón de búsqueda de consulta
    const buscarConsultaBtn = document.getElementById('buscarConsultaBtn');

    // Función de validación personalizada
    const validateForm = (form) => {
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return false;
        }
        return true;
    };

    // Añade el evento 'click' al botón de búsqueda de consulta
    buscarConsultaBtn.addEventListener('click', function () {
        // Recorre todos los formularios con la clase 'needs-validation2'
        Array.prototype.slice.call(forms).forEach(function (form) {
            // Validar el formulario
            if (validateForm(form)) {
                // Ejecutar la función personalizada 'buscarConsulta' si el formulario es válido
                buscarConsulta();
                // Abrir el modal si el formulario es válido
                var myModal = new bootstrap.Modal(document.getElementById('verConsultas'), {
                    keyboard: false
                });
                myModal.show();
            }
        });
    });
})();
