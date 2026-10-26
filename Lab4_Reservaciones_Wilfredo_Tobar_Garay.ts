
/*
Nombre: Wilfredo Tobar Garay
Laboratorio 4: Reservaciones de restaurante
*/

// 1. INTERFAZ
interface Reservacion {
    id: number;
    cliente: string;
    personas: number;
    zona: string;
}

// 2. ARREGLO INICIAL CON CUATRO RESERVACIONES
const reservaciones: Reservacion[] = [
    { id: 1, cliente: "Carlos", personas: 2, zona: "Interior" },
    { id: 2, cliente: "María", personas: 6, zona: "Terraza" },
    { id: 3, cliente: "José", personas: 4, zona: "Interior" },
    { id: 4, cliente: "Ana", personas: 5, zona: "Terraza" }
];

// FUNCIÓN TIPADA PARA REGISTRAR RESERVACIONES
function registrarReservacion(
    lista: Reservacion[],
    nueva: Reservacion,
    prioritaria: boolean
): void {
    if (prioritaria) {
        lista.unshift(nueva);
    } else {
        lista.push(nueva);
    }

    console.log("Reservación registrada:", nueva.cliente);
}

// 3. REGISTRAR UNA NORMAL Y UNA PRIORITARIA
registrarReservacion(
    reservaciones,
    { id: 5, cliente: "Pedro", personas: 3, zona: "Interior" },
    false
);

registrarReservacion(
    reservaciones,
    { id: 6, cliente: "Lucía", personas: 7, zona: "Terraza" },
    true
);

console.log("\n--- LISTA ANTES DE ATENDER ---");
console.log(reservaciones);

// 4. ATENDER LA PRIMERA RESERVACIÓN
const atendida: Reservacion | undefined = reservaciones.shift();

if (atendida !== undefined) {
    console.log(
        "\nCliente atendido:",
        atendida.cliente,
        "| Personas:",
        atendida.personas
    );
} else {
    console.log("\nNo hay reservaciones pendientes.");
}

// 5. BÚSQUEDA POR IDENTIFICADOR
const idBuscado: number = 2;
const encontrada: Reservacion | undefined = reservaciones.find(
    (reserva: Reservacion): boolean => reserva.id === idBuscado
);

if (encontrada !== undefined) {
    console.log("\nReservación encontrada:", encontrada);
} else {
    console.log("\nNo existe una reservación con ID:", idBuscado);
}

// DEMOSTRAR TAMBIÉN UN ID INEXISTENTE
const idInexistente: number = 99;
const noEncontrada: Reservacion | undefined = reservaciones.find(
    (reserva: Reservacion): boolean => reserva.id === idInexistente
);

if (noEncontrada !== undefined) {
    console.log("\nReservación encontrada:", noEncontrada);
} else {
    console.log("\nNo existe una reservación con ID:", idInexistente);
}

// 6. FILTRAR TERRAZA CON CINCO O MÁS PERSONAS
const cantidadAntes: number = reservaciones.length;

const filtradas: Reservacion[] = reservaciones.filter(
    (reserva: Reservacion): boolean =>
        reserva.zona === "Terraza" && reserva.personas >= 5
);

const cantidadDespues: number = reservaciones.length;

console.log("\n--- RESERVACIONES FILTRADAS ---");

if (filtradas.length > 0) {
    console.log(filtradas);
} else {
    console.log("No hay reservaciones que cumplan las condiciones.");
}

// 7. COMPROBACIONES FINALES
console.log("\n--- ESTADO FINAL ---");
console.log("Reservaciones pendientes:", reservaciones);
console.log("Cantidad de pendientes:", reservaciones.length);
console.log("Coincidencias del filtro:", filtradas.length);
console.log("Cantidad antes de filtrar:", cantidadAntes);
console.log("Cantidad después de filtrar:", cantidadDespues);

if (cantidadAntes === cantidadDespues) {
    console.log("Comprobación correcta: filter() no modificó el arreglo original.");
} else {
    console.log("La cantidad del arreglo original cambió.");
}

// 8. SEGUNDA LLAMADA DE PRUEBA CON UN ARREGLO VACÍO
const pruebaVacia: Reservacion[] = [];

registrarReservacion(
    pruebaVacia,
    { id: 7, cliente: "Sofía", personas: 2, zona: "Interior" },
    false
);

console.log("\nPrueba con arreglo vacío:", pruebaVacia);
