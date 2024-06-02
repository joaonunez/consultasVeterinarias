document.addEventListener('DOMContentLoaded', function () {
    const tabla = document.getElementById('tablaVeterinarios').getElementsByTagName('tbody')[0];

    veterinarios.forEach(veterinario => {
        const row = tabla.insertRow(); // Crear una nueva fila
        row.insertCell(0).innerText = veterinario.getId; // ID
        row.insertCell(1).innerText = veterinario.getNombre; // Nombre
        row.insertCell(2).innerText ="$ "+ veterinario.getTarifaBase +" USD"; // Especialidad

    });
});
