interface Pelicula {
    titulo: string; 
    director: string;
    anoEstreno?: number; 
    info(): void;
}

class Moviee implements Pelicula {
    titulo: string;
    director: string;
    anoEstreno?: number;

    constructor(titulo: string, director: string, anoEstreno?: number) {
        this.titulo = titulo;
        this.director = director;
        this.anoEstreno = anoEstreno;
    }

    info(): void {
        console.log(`La película se estrenó en: ${this.anoEstreno || "Año desconocido"}, 
                        Nombre: ${this.titulo}, 
                        Director: ${this.director}`);
    }
}


const pelicula1 = new Moviee("Inception", "Christopher Nolan", 2010);
pelicula1.info();

const pelicula2 = new Moviee("pelicula misteriosa", "Director X");
pelicula2.info();


