// EJERCICIO 1: Verificar mayor de edad con operador ternario
function verificarEdad() {
    const edad = parseInt(document.getElementById('edad').value);
    if (isNaN(edad)) {
        document.getElementById('resultadoEdad').innerHTML = '<div class="resultado">Por favor ingrese una edad válida</div>';
        return;
    }

    const mensaje = edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad';
    document.getElementById('resultadoEdad').innerHTML = `<div class="resultado">Edad: ${edad} años - ${mensaje}</div>`;
}

// EJERCICIO 2: Calcular nota final
function calcularNotaFinal() {
    const nombre = document.getElementById('nombreAlumno').value;
    const carnet = document.getElementById('carnetAlumno').value;
    const examen = parseFloat(document.getElementById('examen').value);
    const tareas = parseFloat(document.getElementById('tareas').value);
    const asistencia = parseFloat(document.getElementById('asistencia').value);
    const investigacion = parseFloat(document.getElementById('investigacion').value);

    if (!nombre || !carnet || isNaN(examen) || isNaN(tareas) || isNaN(asistencia) || isNaN(investigacion)) {
        document.getElementById('resultadoNota').innerHTML = '<div class="resultado">Por favor complete todos los campos</div>';
        return;
    }

    const notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);

    document.getElementById('resultadoNota').innerHTML = `
                <div class="resultado">
                    <h3>Datos del Alumno:</h3>
                    <p><strong>Nombre:</strong> ${nombre}</p>
                    <p><strong>Carnet:</strong> ${carnet}</p>
                    <p><strong>Examen (20%):</strong> ${examen}</p>
                    <p><strong>Tareas (40%):</strong> ${tareas}</p>
                    <p><strong>Asistencia (10%):</strong> ${asistencia}</p>
                    <p><strong>Investigación (30%):</strong> ${investigacion}</p>
                    <p><strong>Nota Final:</strong> ${notaFinal.toFixed(2)}</p>
                </div>
            `;
}

// EJERCICIO 3: Calcular aumento salarial
function calcularAumento() {
    const nombre = document.getElementById('nombreEmpleado').value;
    const salario = parseFloat(document.getElementById('salario').value);
    const categoria = document.getElementById('categoria').value;

    if (!nombre || isNaN(salario) || !categoria) {
        document.getElementById('resultadoAumento').innerHTML = '<div class="resultado">Por favor complete todos los campos</div>';
        return;
    }

    let porcentajeAumento;
    switch(categoria) {
        case 'A': porcentajeAumento = 15; break;
        case 'B': porcentajeAumento = 30; break;
        case 'C': porcentajeAumento = 10; break;
        case 'D': porcentajeAumento = 20; break;
        default: porcentajeAumento = 0;
    }

    const aumento = salario * (porcentajeAumento / 100);
    const nuevoSalario = salario + aumento;

    document.getElementById('resultadoAumento').innerHTML = `
                <div class="resultado">
                    <h3>Datos del Empleado:</h3>
                    <p><strong>Nombre:</strong> ${nombre}</p>
                    <p><strong>Salario actual:</strong> $${salario.toFixed(2)}</p>
                    <p><strong>Categoría:</strong> ${categoria}</p>
                    <p><strong>Porcentaje de aumento:</strong> ${porcentajeAumento}%</p>
                    <p><strong>Aumento salarial:</strong> $${aumento.toFixed(2)}</p>
                    <p><strong>Nuevo salario:</strong> $${nuevoSalario.toFixed(2)}</p>
                </div>
            `;
}

// EJERCICIO 4: Encontrar número mayor
function encontrarMayor() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultadoMayor').innerHTML = '<div class="resultado">Por favor ingrese números válidos</div>';
        return;
    }

    let mayor;
    if (num1 > num2) {
        mayor = num1;
    } else if (num2 > num1) {
        mayor = num2;
    } else {
        mayor = "Los números son iguales";
    }

    document.getElementById('resultadoMayor').innerHTML = `
                <div class="resultado">
                    <p><strong>Número 1:</strong> ${num1}</p>
                    <p><strong>Número 2:</strong> ${num2}</p>
                    <p><strong>Mayor:</strong> ${mayor}</p>
                </div>
            `;
}

// EJERCICIO 5: Descuentos Ford
function calcularDescuentoFord() {
    const modelo = document.getElementById('cocheFord').value;
    const precio = parseFloat(document.getElementById('precioCoche').value);

    if (!modelo || isNaN(precio)) {
        document.getElementById('resultadoFord').innerHTML = '<div class="resultado">Por favor complete todos los campos</div>';
        return;
    }

    let descuento;
    switch(modelo) {
        case 'FIESTA': descuento = 5; break;
        case 'FOCUS': descuento = 10; break;
        case 'ESCAPE': descuento = 20; break;
        default: descuento = 0;
    }

    const montoDescuento = precio * (descuento / 100);
    const precioFinal = precio - montoDescuento;

    document.getElementById('resultadoFord').innerHTML = `
                <div class="resultado">
                    <h3>Información del Vehículo:</h3>
                    <p><strong>Modelo:</strong> Ford ${modelo}</p>
                    <p><strong>Precio original:</strong> $${precio.toFixed(2)}</p>
                    <p><strong>Descuento aplicado:</strong> ${descuento}%</p>
                    <p><strong>Monto del descuento:</strong> $${montoDescuento.toFixed(2)}</p>
                    <p><strong>Precio final:</strong> $${precioFinal.toFixed(2)}</p>
                </div>
            `;
}

// EJERCICIO 6: Descuentos turísticos
function calcularDescuentoViaje() {
    const destino = document.getElementById('destino').value;
    const precio = parseFloat(document.getElementById('precioViaje').value);

    if (!destino || isNaN(precio)) {
        document.getElementById('resultadoViaje').innerHTML = '<div class="resultado">Por favor complete todos los campos</div>';
        return;
    }

    let descuento;
    let nombreDestino;
    switch(destino) {
        case 'COSTA_SOL':
            descuento = 5;
            nombreDestino = 'La Costa del Sol';
            break;
        case 'PANCHIMALCO':
            descuento = 10;
            nombreDestino = 'Panchimalco';
            break;
        case 'PUERTO_TRIUNFO':
            descuento = 15;
            nombreDestino = 'Puerto el Triunfo';
            break;
        default:
            descuento = 0;
            nombreDestino = 'Destino desconocido';
    }

    const montoDescuento = precio * (descuento / 100);
    const precioFinal = precio - montoDescuento;

    document.getElementById('resultadoViaje').innerHTML = `
                <div class="resultado">
                    <h3>Información del Viaje:</h3>
                    <p><strong>Origen:</strong> Palma</p>
                    <p><strong>Destino:</strong> ${nombreDestino}</p>
                    <p><strong>Precio original:</strong> $${precio.toFixed(2)}</p>
                    <p><strong>Descuento aplicado:</strong> ${descuento}%</p>
                    <p><strong>Monto del descuento:</strong> $${montoDescuento.toFixed(2)}</p>
                    <p><strong>Precio final:</strong> $${precioFinal.toFixed(2)}</p>
                </div>
            `;
}

// EJERCICIO 7: Generar inputs para 10 números
function generarInputs() {
    let html = '<p>Ingrese 10 números enteros:</p>';
    for (let i = 1; i <= 10; i++) {
        html += `<input type="number" id="numero${i}" placeholder="Número ${i}">`;
        if (i % 5 === 0) html += '<br>';
    }
    document.getElementById('inputsNumeros').innerHTML = html;
}

// EJERCICIO 7: Análisis de números
function analizarNumeros() {
    const numeros = [];
    for (let i = 1; i <= 10; i++) {
        const valor = parseInt(document.getElementById(`numero${i}`).value);
        if (isNaN(valor)) {
            document.getElementById('resultadoAnalisis').innerHTML = '<div class="resultado">Por favor ingrese todos los números</div>';
            return;
        }
        numeros.push(valor);
    }

    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;

    for (let num of numeros) {
        if (num < 0) negativos++;
        if (num > 0) positivos++;
        if (num % 15 === 0) multiplosDe15++;
        if (num % 2 === 0) sumaPares += num;
    }

    document.getElementById('resultadoAnalisis').innerHTML = `
                <div class="resultado">
                    <h3>Análisis de los números:</h3>
                    <p><strong>Números ingresados:</strong> ${numeros.join(', ')}</p>
                    <p><strong>Cantidad de valores negativos:</strong> ${negativos}</p>
                    <p><strong>Cantidad de valores positivos:</strong> ${positivos}</p>
                    <p><strong>Cantidad de múltiplos de 15:</strong> ${multiplosDe15}</p>
                    <p><strong>Suma de números pares:</strong> ${sumaPares}</p>
                </div>
            `;
}

// EJERCICIO 8: Tabla de multiplicar
function mostrarTabla() {
    const numero = parseInt(document.getElementById('numeroTabla').value);

    if (isNaN(numero)) {
        document.getElementById('resultadoTabla').innerHTML = '<div class="resultado">Por favor ingrese un número válido</div>';
        return;
    }

    let tabla = `<div class="tabla"><h3>Tabla de multiplicar del ${numero}:</h3>`;
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}<br>`;
    }
    tabla += '</div>';

    document.getElementById('resultadoTabla').innerHTML = tabla;
}

// EJERCICIO 9: Conversión de temperatura
function convertirTemperatura() {
    const celsius = parseFloat(document.getElementById('celsius').value);

    if (isNaN(celsius)) {
        document.getElementById('resultadoTemp').innerHTML = '<div class="resultado">Por favor ingrese una temperatura válida</div>';
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    let mensaje;

    if (fahrenheit >= 14 && fahrenheit < 32) {
        mensaje = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        mensaje = "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit <= 96) {
        mensaje = "Temperatura alta";
    } else {
        mensaje = "Temperatura desconocida";
    }

    document.getElementById('resultadoTemp').innerHTML = `
                <div class="resultado">
                    <p><strong>Temperatura en Celsius:</strong> ${celsius}°C</p>
                    <p><strong>Temperatura en Fahrenheit:</strong> ${fahrenheit.toFixed(2)}°F</p>
                    <p><strong>Clasificación:</strong> ${mensaje}</p>
                </div>
            `;
}

// EJERCICIO 10: Iniciar captura de edades
function iniciarEdades() {
    let html = `
                <h4>Turno Mañana (5 estudiantes):</h4>
                <div>
                    <input type="number" id="mañana1" placeholder="Edad 1">
                    <input type="number" id="mañana2" placeholder="Edad 2">
                    <input type="number" id="mañana3" placeholder="Edad 3">
                    <input type="number" id="mañana4" placeholder="Edad 4">
                    <input type="number" id="mañana5" placeholder="Edad 5">
                </div>
                <h4>Turno Tarde (6 estudiantes):</h4>
                <div>
                    <input type="number" id="tarde1" placeholder="Edad 1">
                    <input type="number" id="tarde2" placeholder="Edad 2">
                    <input type="number" id="tarde3" placeholder="Edad 3">
                    <input type="number" id="tarde4" placeholder="Edad 4">
                    <input type="number" id="tarde5" placeholder="Edad 5">
                    <input type="number" id="tarde6" placeholder="Edad 6">
                </div>
                <h4>Turno Noche (11 estudiantes):</h4>
                <div>
                    <input type="number" id="noche1" placeholder="Edad 1">
                    <input type="number" id="noche2" placeholder="Edad 2">
                    <input type="number" id="noche3" placeholder="Edad 3">
                    <input type="number" id="noche4" placeholder="Edad 4">
                    <input type="number" id="noche5" placeholder="Edad 5">
                    <input type="number" id="noche6" placeholder="Edad 6">
                    <input type="number" id="noche7" placeholder="Edad 7">
                    <input type="number" id="noche8" placeholder="Edad 8">
                    <input type="number" id="noche9" placeholder="Edad 9">
                    <input type="number" id="noche10" placeholder="Edad 10">
                    <input type="number" id="noche11" placeholder="Edad 11">
                </div>
            `;

    document.getElementById('inputsEdades').innerHTML = html;
    document.getElementById('btnCalcularPromedios').style.display = 'inline-block';
}

// EJERCICIO 10: Calcular promedios
function calcularPromedios() {
    // Obtener edades turno mañana
    const edadesMañana = [];
    for (let i = 1; i <= 5; i++) {
        const edad = parseInt(document.getElementById(`mañana${i}`).value);
        if (isNaN(edad)) {
            document.getElementById('resultadoPromedios').innerHTML = '<div class="resultado">Por favor complete todas las edades</div>';
            return;
        }
        edadesMañana.push(edad);
    }

    // Obtener edades turno tarde
    const edadesTarde = [];
    for (let i = 1; i <= 6; i++) {
        const edad = parseInt(document.getElementById(`tarde${i}`).value);
        if (isNaN(edad)) {
            document.getElementById('resultadoPromedios').innerHTML = '<div class="resultado">Por favor complete todas las edades</div>';
            return;
        }
        edadesTarde.push(edad);
    }

    // Obtener edades turno noche
    const edadesNoche = [];
    for (let i = 1; i <= 11; i++) {
        const edad = parseInt(document.getElementById(`noche${i}`).value);
        if (isNaN(edad)) {
            document.getElementById('resultadoPromedios').innerHTML = '<div class="resultado">Por favor complete todas las edades</div>';
            return;
        }
        edadesNoche.push(edad);
    }

    // Calcular promedios
    const promMañana = edadesMañana.reduce((sum, edad) => sum + edad, 0) / edadesMañana.length;
    const promTarde = edadesTarde.reduce((sum, edad) => sum + edad, 0) / edadesTarde.length;
    const promNoche = edadesNoche.reduce((sum, edad) => sum + edad, 0) / edadesNoche.length;

    // Determinar turno con mayor promedio
    let turnoMayor;
    const promedios = [
        {turno: 'Mañana', promedio: promMañana},
        {turno: 'Tarde', promedio: promTarde},
        {turno: 'Noche', promedio: promNoche}
    ];

    turnoMayor = promedios.reduce((max, actual) =>
        actual.promedio > max.promedio ? actual : max
    );

    document.getElementById('resultadoPromedios').innerHTML = `
                <div class="resultado">
                    <h3>Promedios de edades por turno:</h3>
                    <p><strong>Promedio Turno Mañana:</strong> ${promMañana.toFixed(2)} años</p>
                    <p><strong>Promedio Turno Tarde:</strong> ${promTarde.toFixed(2)} años</p>
                    <p><strong>Promedio Turno Noche:</strong> ${promNoche.toFixed(2)} años</p>
                    <p><strong>Turno con mayor promedio:</strong> ${turnoMayor.turno} (${turnoMayor.promedio.toFixed(2)} años)</p>
                </div>
            `;
}