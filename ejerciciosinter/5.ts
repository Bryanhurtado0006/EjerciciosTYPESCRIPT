
interface Videojuegos {
    titulo: string;
    plataforma: string;
    mostrarInfo(): void;
}


class Juegos implements Videojuegos {
    private _titulo: string = "";
    private _plataforma: string = "";

    
    get titulo(): string {
        return this._titulo;
    }

    set titulo(nuevoTitulo: string) {
        this._titulo = nuevoTitulo;
    }

    get plataforma(): string {
        return this._plataforma;
    }

    set plataforma(nuevaPlataforma: string) {
        this._plataforma = nuevaPlataforma;
    }


    mostrarInfo(): void {
        console.log(`Juego: ${this._titulo}, Plataforma: ${this._plataforma}`);
    }
}


const juegazo = new Juegos();


juegazo.titulo = "King of Fighters";
juegazo.plataforma = "Arcade";


juegazo.mostrarInfo();




