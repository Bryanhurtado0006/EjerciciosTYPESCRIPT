function Login(
    usuario: string, 
    contrasena: string): string {

    if (!usuario || !contrasena || contrasena.length < 8) {
        return "datos incorrectos";
    }
    return "Sesion iniciada";
}


//console.log(Login("pepeee", "123456789")); 
//console.log(Login("", "12345")); 


//2


// ? funciones, cuando se envian los parametros 
// ejemplo numero:?
//=> funcion felcha

function IMC(
    peso: number, altura: number): string {

    const imc = peso / (altura * altura);
    return imc < 18.5 ? "bajo peso" : imc <= 24.9 ? "normal" :
           imc <= 29.9 ? "gordo": "obeso";
}


// console.log(IMC(45, 1.90)); 
// console.log(IMC(50, 1.60)); 





function analizarTemperaturas(ciudades: { ciudad: string; temperatura: number }[]) {

    let ciudadMasCaliente = ciudades[0];
    let ciudadmasFria = ciudades[0];
    let sumaTemperaturas = 0;

    ciudades.forEach((ciudad) => {
        if (ciudad.temperatura > ciudadMasCaliente.temperatura) {
            ciudadMasCaliente = ciudad;
        }
        if (ciudad.temperatura < ciudadmasFria.temperatura) {
            ciudadmasFria = ciudad;
        }
        sumaTemperaturas += ciudad.temperatura;
    });

    const promedio = sumaTemperaturas / ciudades.length;

    return {
        ciudadMasCaliente: ciudadMasCaliente.ciudad,
        ciudadMasFria: ciudadmasFria.ciudad,
        promedioTemperatura: promedio,
    };
}


const citys = [
    { ciudad: "cali", temperatura: 32 },
    { ciudad: "barrancabermeja", temperatura: 22 },
    { ciudad: "washington DC", temperatura: 42 },
];

const resultadot = analizarTemperaturas(citys);
console.log(resultadot);




