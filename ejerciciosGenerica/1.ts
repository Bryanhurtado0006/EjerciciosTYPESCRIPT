function reversa <T> (arreglito: T[]): T[] {
    const resultado: T[] = [];

    for (let i = arreglito.length - 1; i >= 0 ; i--) {

        resultado.push(arreglito[i]);
    }
    return resultado;
}


const numeross = [1, 2, 3, 4, 5];
const numerosInvertidos = reversa(numeross);
console.log(numerosInvertidos); 

const letras = ['a', 'b', 'c'];
const letrasInvertidas = reversa(letras);
console.log(letrasInvertidas); 
