// 1. Variable string
let nombre: string = "TORETO";
console.log(nombre);

// 2. Variable number
let edad: number = 48;

// 3. Variable boolean
let esEstudiante: boolean = true;

// 4. Función doblar número
const doblarNumero = (num: number): number => num * 2;

// 5. Concatenar strings
const concatenarPalabras = (a: string, b: string): string => `${a} ${b}`;

// 6. Verificar par
const esPar = (num: number): boolean => num % 2 === 0;

// 7. Evaluar edad
const evaluarEdad = (edad: number): string => edad < 18 ? "Menor de edad" : "Adulto";

// 8. Comparar números
const compararNumeros = (a: number, b: number): number => Math.max(a, b);

// 9. Múltiplo de 5
const esMultiploDe5 = (num: number): boolean => num % 5 === 0;

// 10. Día de la semana
const diaDeLaSemana = (dia: number): string => {
  const dias = ["Lunes", "martes", "Mmiercoles", "fueves", "viernes", "sabado", "domingo"];
  return dias[dia - 1] || "Da invalido";
};

// 11. Imprimir números
const imprimirNumeros = (n: number): void => {
  for (let i = 1; i <= n; i++) console.log(i);
};

// 12. Sumar números
const sumarNumeros = (n: number): number => n * (n + 1) / 2;

// 13. Multiplicar array
const multiplicarArray = (arr: number[]): number[] => arr.map(n => n * 2);

// 14. Contar >10
const contarMayores10 = (arr: number[]): number => arr.filter(n => n > 10).length;

// 15. Número mayor
const maximoArray = (arr: number[]): number => Math.max(...arr);

// 16. Buscar elemento
const buscarElemento = (arr: number[], num: number): boolean => arr.includes(num);

// 17. Mayúsculas
const aMayusculas = (arr: string[]): string[] => arr.map(s => s.toUpperCase());

// 18. Pares (con y sin filter)
const paresSinFilter = (arr: number[]): number[] => {
  let result: number[] = [];
  arr.forEach(n => { if (n % 2 === 0) result.push(n) });
  return result;
};
const paresConFilter = (arr: number[]): number[] => arr.filter(n => n % 2 === 0);

// 19. Promedio
const promedio = (arr: number[]): number => arr.reduce((a, b) => a + b, 0) / arr.length;

// 20. Suma array (con y sin reduce)
const sumaSinReduce = (arr: number[]): number => {
  let total = 0;
  arr.forEach(n => total += n);
  return total;
};
const sumaConReduce = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);

// 21. Objeto persona
const persona = { nombre: "Juan", edad: 30, ciudad: "popayar" };

// 22. Actualizar ciudad
const actualizarCiudad = (persona: any, ciudad: string) => ({ ...persona, ciudad });

// 23. Autos recientes
const autosRecientes = (autos: any[]) => autos.filter(auto => auto.año > 2015);

// 24. Buscar auto
const buscarAuto = (autos: any[], marca: string) => autos.filter(auto => auto.marca === marca);

// 25. Contar propiedades
const contarPropiedades = (obj: object) => Object.keys(obj).length;

// 26. Ejecutar función
const ejecutarFuncion = (fn: Function) => fn();

// 27. Multiplicador
const multiplicarPor = (x: number) => (y: number) => x * y;

// 28. Contador
const crearContador = () => {
  let count = 0;
  return () => ++count;
};

// 29. Ordenar nombres
const ordenarNombres = (nombres: string[]) => [...nombres].sort();

// 30. Intercalar arrays
const intercalarArrays = (arr1: any[], arr2: any[]) => {
  const result = [];
  const maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) result.push(arr1[i]);
    if (i < arr2.length) result.push(arr2[i]);
  }
  return result;
};

// 31. Clonar objeto
const clonarObjeto = (obj: object) => ({ ...obj });

// 32. Fusionar objetos
const mergeObjetos = (obj1: object, obj2: object) => ({ ...obj1, ...obj2 });

// 33. Filtrar por propiedad
const filtrarPorPropiedad = (arr: any[], prop: string) => arr.filter(obj => obj.hasOwnProperty(prop));

// 34. Contar elementos
const contarElementos = (arr: string[]) => {
  const count: { [key: string]: number } = {};
  arr.forEach(item => count[item] = (count[item] || 0) + 1);
  return count;
};

// 35. Sumar valores
const sumarValores = (arr: any[]) => arr.reduce((sum, obj) => sum + (obj.valor || 0), 0);

