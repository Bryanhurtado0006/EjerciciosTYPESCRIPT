interface Transporte {
    capacidad: number;
    mostrarInf(): void;
}

interface Avion_vuaaa extends Transporte {
    altitudMaxima: number;
}

class Transport implements Avion_vuaaa {
    public capacidad: number;
    public altitudMaxima: number;

    constructor(capacidad: number, altitudMaxima: number) {
        this.capacidad = capacidad;
        this.altitudMaxima = altitudMaxima;
    }

    mostrarInf(): void {
        console.log(`La capacidad del avión es: ${this.capacidad}, 
        alcanza una altura máxima de: ${this.altitudMaxima} metros.`);
    }
}

const avioncitos: Avion_vuaaa = new Transport(50, 23000);
avioncitos.mostrarInf();
