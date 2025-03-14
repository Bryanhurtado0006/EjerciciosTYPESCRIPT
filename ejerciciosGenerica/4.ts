class Repositorio<T> {
    private elementos: T[] = [];
    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }


    buscarPorindice(indice: number): T | undefined {
        return this.elementos[indice];
    }

    eliminarPorindice(indice: number): void {
        if (indice >= 0 && indice < this.elementos.length) {
            this.elementos.splice(indice, 1);
        } else {
            console.error("Índice fuera de rango.");
        }
    }
}


const repo = new Repositorio <string> ();
repo.agregar("Elemento 1");
repo.agregar("Elemento 2");
repo.agregar("Elemento 3");

console.log(repo.buscarPorindice(1)); 

repo.eliminarPorindice(1);
console.log(repo.buscarPorindice(1)); 

