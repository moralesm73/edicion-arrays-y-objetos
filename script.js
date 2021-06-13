
const todosCardBody = document.querySelectorAll("p.mensajeConcatenado");
const cuerpoTablasARellenar = document.querySelectorAll("tbody");
const parrafoPacientesIsapre = document.querySelector("#pacientesIsapre");
const parrafoPacientesFonasa = document.querySelector("#pacientesFonasa");
const arregloConcatenadoAtenciones = [radiologia, traumatologia, dental];

// 01 - Agregar los nuevos objetos a Traumatologia
let nuevasAtencionesTraumatologia = [
    { 'hora': '09:00', 'especialista': 'RENÉ POBLETE', 'paciente': 'ANA GELLONA', 'rut': '13123329-7', 'prevision': 'ISAPRE' },
    { 'hora': '09:30', 'especialista': 'MARÍA SOLAR', 'paciente': 'RAMIRO ANDRADE', 'rut': '12221451-K', 'prevision': 'FONASA' },
    { 'hora': '10:00', 'especialista': 'RAÚL LOYOLA', 'paciente': 'CARMEN ISLA', 'rut': '10112348-3', 'prevision': 'ISAPRE' },
    { 'hora': '10:30', 'especialista': 'ANTONIO LARENAS', 'paciente': 'PABLO LOAYZA', 'rut': '13453234-1', 'prevision': 'ISAPRE' },
    { 'hora': '12:00', 'especialista': 'MATÍAS ARAVENA', 'paciente': 'SUSANA POBLETE', 'rut': '14345656-6', 'prevision': 'FONASA' }
];
nuevasAtencionesTraumatologia.forEach(nuevaAtencion => {
    traumatologia.push(nuevaAtencion);
})

// 02 - Eliminar el primero y el último registro de Radiología
radiologia.shift();
radiologia.pop();

// 03 - Imprimir las atencion de Dental separadas por un guión
todosCardBody[2].innerHTML += '';
dental.forEach(atencion => {
    let arregloDeDatosAtencion = [atencion.hora, atencion.especialista, atencion.paciente, atencion.rut, atencion.prevision];
    todosCardBody[2].innerHTML += arregloDeDatosAtencion.join(" - ") + '<br>';
})

//04 - Imprimir todos los pacientes que se atendieron en el Centro Médico
const listadoTotalPacientes = [];
for (let index = 0; index < arregloConcatenadoAtenciones.length; index++) {
    arregloConcatenadoAtenciones[index].forEach(atencion => {
        listadoTotalPacientes.push(atencion.paciente);
    })
}
todosCardBody[3].innerHTML = '';
listadoTotalPacientes.forEach(paciente => {
    todosCardBody[3].innerHTML += paciente + '<br>';
})

//05 - Filtrar solo los que tienen ISAPRE en Atenciones Dentales
parrafoPacientesIsapre.innerHTML = '';
const soloIsapreDental = dental.filter(paciente => paciente.prevision == "ISAPRE");
soloIsapreDental.forEach(paciente => {
    parrafoPacientesIsapre.innerHTML += paciente.paciente + ' - ' + paciente.prevision + '<br>';
})

//06 - Filtrar solo los que tienen FONASA en Atenciones de Traumatologia
parrafoPacientesFonasa.innerHTML = '';
const soloFonasaTraumatologia = traumatologia.filter(paciente => paciente.prevision == "FONASA");
soloFonasaTraumatologia.forEach(paciente => {
    parrafoPacientesFonasa.innerHTML += paciente.paciente + ' - ' + paciente.prevision + '<br>';
})

for (let index = 0; index < cuerpoTablasARellenar.length; index++) {
    let arrayARecorrer = arregloConcatenadoAtenciones[index];
    console.log(arrayARecorrer);
    cuerpoTablasARellenar[index].innerHTML = imprimirInformacion(arrayARecorrer);
}

function imprimirInformacion(atenciones) {
    let stringInfo = '';
    atenciones.forEach(atencion => {
        stringInfo += '<tr><th scope="row" class="text-center">' + atencion.hora + '</th>';
        stringInfo += '<td class="text-center">' + atencion.especialista + '</td>';
        stringInfo += '<td class="text-center">' + atencion.paciente + '</td>';
        stringInfo += '<td class="text-center">' + atencion.rut + '</td>';
        stringInfo += '<td class="text-center">' + atencion.prevision + '</td>';
    });
    return stringInfo;
}