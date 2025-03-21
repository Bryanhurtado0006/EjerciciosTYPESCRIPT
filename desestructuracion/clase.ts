class Rectangulo{
       
    constructor (public ancho:number,public alto:number){}

    obetenerDim():{}{
        const {ancho,alto}=this;
        return{ancho,alto};
    }
    obeetener2(){
        const [ancho,alto]=[this.ancho, this.alto];
        return `anchi:${ancho},ato${alto}`;
    }

}
const rectnagulito = new Rectangulo(23,67);

