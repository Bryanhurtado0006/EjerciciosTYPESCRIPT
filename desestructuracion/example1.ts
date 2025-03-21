const Persona = {
    nombres:"HECTOR",
    edadd:13,
    cuidad:"Afganistan",

}
console.log(Persona.cuidad);

//destructuracion

const{ nombres, edadd }=Persona;

console.log(nombre);
const {nombres:nuevoName, edadd:nuevaEdad}= Persona;
console.log(nuevoName);
console.log(nuevaEdad);