//clase del veterinario
class Veterinario{
    constructor(id, nombre, especialidad){
        this._id = id;
        this._nombre = nombre;
        this._especialidad = especialidad;
    }
    //metodos get para poder obtenerlos desde el formulario html
    get getId(){
        return this._id;
    }
    get getNombre(){
        return this._nombre;
    }
    get getEspecialidad(){
        return this._especialidad;
    }
}

let veterinarios = []; //creamos lista vacia de los veterinarios

//creamos objetos veterinarios
veterinarios.push(new Veterinario(1,'Dra. Laura Gómez','Cirugía'));
veterinarios.push(new Veterinario(2,'Dr. Carlos Martínez','General'));
veterinarios.push(new Veterinario(3,'Dra. Ana Rodríguez','General'));


//clase mascota
class Mascota{
    constructor(id, nombre, tipo, edad, raza, tutor){
        this._id = id;
        this._nombre = nombre;
        this._tipo = tipo;
        this._edad = edad;
        this._raza = raza;
        this._tutor = tutor;
    }
    //metodos get para poder obtenerlos desde el formulario html
    get getId(){
        return this._id;
    }
    get getNombre(){
        return this._nombre;
    }
    get getTipo(){
        return this._tipo;
    }
    get getEdad(){
        return this._edad;
    }
    get getRaza(){
        return this._raza;
    }
    get getTutor(){
        return this._tutor;
    }
}


class Consulta{
    constructor(id, mascota, veterinario, fecha, diagnostico, tratamiento, costo){
        this._id = id;
        this._mascota = mascota;
        this._veterinario = veterinario;
        this._fecha = fecha;
        this._diagnostico = diagnostico;
        this._tratamiento = tratamiento;
        this._costo = costo;
    }
    //metodos get para poder obtenerlos desde el formulario html
    get getId(){
        return this._id;
    }
    get getMascota(){
        return this._mascota;
    }
    get getVeterinario(){
        return this._veterinario;
    }
    get getFecha(){
        return this._fecha;
    }
    get getDiagnostico(){
        return this._diagnostico;
    }
    get getTratamiento(){
        return this._tratamiento;
    }
    get getCosto(){
        return this._costo;
    }
    
}




let mascotas = [];
mascotas.push(new Mascota(1,'Zeus','Perro',0 , 'Dálmata', 'Ailin Macaya' ));
mascotas.push(new Mascota(2,'Hairo','Perro',2,'Labrador','Freddy Macaya'));
mascotas.push(new Mascota(3,'Eris','Perro',3,'Pastor Alemán','Freddy Macaya'));
mascotas.push(new Mascota(4, 'Luna', 'Gato', 1, 'Siamés', 'Carlos Guajardo'));
mascotas.push(new Mascota(5, 'Max', 'Perro', 3, 'Labrador','Eduardo Vargas'));
mascotas.push(new Mascota(6, 'Coco', 'Perro', 5, 'Bulldog', 'María Magadalena'));
mascotas.push(new Mascota(7, 'Pelusa', 'Gato', 4, 'Persa', 'Javier Bullet'));
mascotas.push(new Mascota(8, 'Rocky', 'Perro', 2, 'Golden Retriever','Angelica Sarmiento'));
mascotas.push(new Mascota(9, 'Nina', 'Gato', 0, 'Maine Coon', 'Laura Rojas'));
mascotas.push(new Mascota(10, 'Bella', 'Perro', 4, 'Labrador', 'Juan Pérez'));
mascotas.push(new Mascota(11, 'Charlie', 'Gato', 2, 'Siamés', 'María González'));
mascotas.push(new Mascota(12, 'Lucy', 'Perro', 3, 'Beagle', 'Pedro Martínez'));
mascotas.push(new Mascota(13, 'Cooper', 'Gato', 1, 'Persa', 'Ana Ramírez'));
mascotas.push(new Mascota(14, 'Bailey', 'Conejo', 2, 'Enano', 'Luis Fernández'));
mascotas.push(new Mascota(15, 'Daisy', 'Ave', 1, 'Periquito', 'Carmen López'));
mascotas.push(new Mascota(16, 'Sadie', 'Perro', 5, 'Golden Retriever', 'Miguel Torres'));
mascotas.push(new Mascota(17, 'Molly', 'Gato', 3, 'Maine Coon', 'Laura Rodríguez'));
mascotas.push(new Mascota(18, 'Rocky', 'Conejo', 2, 'Cabeza de León', 'Roberto Sánchez'));
mascotas.push(new Mascota(19, 'Lily', 'Ave', 1, 'Canario', 'Patricia Jiménez'));
mascotas.push(new Mascota(20, 'Toby', 'Perro', 6, 'Bulldog', 'Francisco Morales'));
mascotas.push(new Mascota(21, 'Milo', 'Gato', 4, 'Bengala', 'Gloria Castro'));
mascotas.push(new Mascota(22, 'Zoe', 'Conejo', 3, 'Rex', 'Diego Herrera'));
mascotas.push(new Mascota(23, 'Oscar', 'Ave', 2, 'Loro', 'Teresa Medina'));
mascotas.push(new Mascota(24, 'Buster', 'Perro', 5, 'Poodle', 'Héctor Ramírez'));
mascotas.push(new Mascota(25, 'Chloe', 'Gato', 2, 'Esfinge', 'Isabel Flores'));
mascotas.push(new Mascota(26, 'Rosie', 'Conejo', 1, 'Gigante de Flandes', 'Ignacio Ruiz'));
mascotas.push(new Mascota(27, 'Duke', 'Ave', 3, 'Agapornis', 'Valeria Rojas'));
mascotas.push(new Mascota(28, 'Lola', 'Perro', 4, 'Labrador', 'Esteban Vargas'));
mascotas.push(new Mascota(29, 'Nala', 'Gato', 1, 'Siamés', 'Andrea Castillo'));
mascotas.push(new Mascota(30, 'Rex', 'Perro', 3, 'Beagle', 'Mauricio Paredes'));
mascotas.push(new Mascota(30, 'Gabu', 'Perro', 12, 'Beagle', 'Mauricio Paredes'));


// Obtener el elemento select del DOM MASCOTAS
const comboBox1 = document.getElementById('nombreMascota');

// Iterar sobre el arreglo de mascotas y agregar opciones al combo box
mascotas.forEach(mascota => {
    // Crear un elemento opción para cada mascota
    const optionElement = document.createElement('option');
    
   
    // Establecer el texto de la opción usando el nombre y el tipo de la mascota
    optionElement.textContent = mascota.getNombre + " ("+ mascota.getTipo+")";
    
    // Establecer el valor de la opción como el ID de la mascota
    optionElement.value = mascota.getId;
    
    // Agregar la opción al combo box
    comboBox1.appendChild(optionElement);
});

let mostrarMascotas = function() {
    let tbody = document.getElementById('tablaMascotas').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Limpiar la tabla antes de llenarla

    // Iterar sobre el arreglo de mascotas y agregar filas a la tabla con retraso
    mascotas.forEach((mascota, index) => {
        
        setTimeout(() => {
            let row = tbody.insertRow(); // Crear una nueva fila
            row.classList.add('fade-in'); // Añadir la clase de animación
            row.insertCell(0).innerText = mascota.getId; // Insertar celda para el ID
            row.insertCell(1).innerText = mascota.getNombre; // Insertar celda para el nombre
            row.insertCell(2).innerText = mascota.getTipo; // Insertar celda para el tipo
            if (mascota.getEdad === 0){
                textoEdad = 'Menos de un año';
                row.insertCell(3).innerText = textoEdad;
            }
            else if(mascota.getEdad > 10){
                textoEdad = 'Mas de 10 años';
                row.insertCell(3).innerText = textoEdad + " ("+mascota.getEdad+" años)";
            }
            else if(mascota.getEdad ===1){
                textoEdad = 'Un año'
                row.insertCell(3).innerText = textoEdad ;
            }
            else {
                textoEdad = 'Mas de un año';
                row.insertCell(3).innerText = textoEdad + " ("+mascota.getEdad+" años)";
            }
             // Insertar celda para la edad
            row.insertCell(4).innerText = mascota.getRaza; // Insertar celda para la raza
            row.insertCell(5).innerText = mascota.getTutor; // Insertar celda para el tutor
        }, index * 250); // Retraso de 500ms por cada fila
    });
}
document.getElementById('verMascotas').addEventListener('shown.bs.modal', mostrarMascotas);




// Obtener el elemento select del DOM MASCOTAS
const comboBox2 = document.getElementById('nombreMedico');

// Iterar sobre el arreglo de mascotas y agregar opciones al combo box
veterinarios.forEach(veterinario => {
    // Crear un elemento opción para cada mascota
    const optionElement = document.createElement('option');
    
   
    // Establecer el texto de la opción usando el nombre y el tipo de la mascota
    optionElement.textContent = veterinario.getNombre;
    
    // Establecer el valor de la opción como el ID de la mascota
    optionElement.value = veterinario.getId;
    
    // Agregar la opción al combo box
    comboBox2.appendChild(optionElement);
});


//recibimos los datosd desde el formulario en index.html
let ingresarConsulta = function(){
    let id = document.getElementById('nombreMascota').value;
    let m = document.getElementById('nombreMedico').value;
    let f = document.getElementById('fecha').value;
    let d = document.getElementById('diagnostico').value;
    let t = document.getElementById('tratamiento').value;
    let mo = document.getElementById('monto').value;

    let mascotaSeleccionada = mascotas.find(mascota => mascota.getId === id);
    
    if(mascotaSeleccionada.getEdad < 1 ){
        mo *= mo * 0.85;
    }
    else if(mascotaSeleccionada.getEdad > 10){
        mo *= mo * 1.10;
    }
    let consulta = new Consulta()
}
