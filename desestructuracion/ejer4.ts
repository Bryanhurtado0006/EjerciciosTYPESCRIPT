class Calculadora{
    sumarr=(a:number,b:number) => a + b;
    restar=(a:number,b:number) => a- b;

}
const calculo = new Calculadora();

const {sumarr , restar} = calculo;

console.log(sumarr(40,4));
console.log(restar(67,9)); 