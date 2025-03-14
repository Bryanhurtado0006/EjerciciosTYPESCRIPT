
interface Par<T, U> {
    primerValor: T;
    segundoValor: U;
}
function concatenarPar<T, U>(par: Par<T, U>): string {
    return `${par.primerValor} ${par.segundoValor}`;
}


const miPar: Par<string, number> = {
    primerValor: "Edad:",
    segundoValor: 25,
};

console.log(concatenarPar(miPar)); 
