
interface Dispositivo {
    nombre: string;
}

interface Smartphone extends Dispositivo {
    tienePantallaTactil: boolean;
}


const miTelefono: Smartphone = {
    nombre: "Samsung Galaxy S21",
    tienePantallaTactil: true
};

console.log(`Dispositivo: ${miTelefono.nombre}`);
console.log(`¿Tiene pantalla tactil? ${miTelefono.tienePantallaTactil ? "Si" : "No"}`);
