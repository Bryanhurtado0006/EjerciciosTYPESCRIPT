
//desestructuracion de objetos

const pipols={
    nombre:"lesñi",
    apellido:"lopez",
    edad: 14,

    direccion:{
        calle:"calle 4",
        ciudad:"cuidad popayotsl"
    }
};

const {nombre,apellido,edad}=pipols;
console.log(nombre);
console.log(apellido);
console.log(edad);

const {calle,ciudad}=pipols.direccion;
console.log(calle);
console.log(ciudad);

const personaCompleta = {
    nombre,
    apellido,
    edad,
    direccion: {
      calle,
      ciudad
    }
  };




