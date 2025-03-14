
/*  recordemos que INCLUDES---devuelve un 
valor booleano verdadero si el valor especificado
 se encuentra en la matriz y falso en caso contrario*/


function filtrar< T > (X: T[], criterio: (elemento: T) => boolean): T[] {
    return X.filter(criterio);
}


const numerosS = [1, 2, 3, 4, 5, 6];

const numerosFiltrados = filtrar(numerosS, (numero) => numero > 3);

console.log(numerosFiltrados); 

const palabras = ["hola", "X", "adiós"];
const palabrasFiltradas = filtrar(palabras, (palabra) => palabra.includes("o"));
console.log(palabrasFiltradas); 

