interface Recargable {
    recargar(nombre: string): void;
}

interface Disparable {
    disparar(nombre: string): void;
}

class PistolaLaser implements Recargable, Disparable {
    private pistola: string;

    constructor(pistola: string) {
        this.pistola = pistola;
    }

    recargar(nombre: string): void {
        this.pistola = nombre;
        console.log(`La pistola a recargar es: ${this.pistola}`);
    }

    disparar(nombre: string): void {
        this.pistola = nombre;
        console.log(`La pistola a disparar es: ${this.pistola}`);
    }
}

// Ejemplo de uso
const pistolita = new PistolaLaser("FIERRO LASER");
console.log(pistolita);

const pistolota: Recargable & Disparable = new PistolaLaser("38");
pistolota.disparar("38");
console.log(pistolota);

pistolita.recargar("Fierro laser ");
console.log(pistolita);
