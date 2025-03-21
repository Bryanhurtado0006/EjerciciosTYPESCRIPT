const numerosos:number[]=[1000,90000,109392];
console.log(numerosos[0]);

const [o,b,z]=numerosos;
console.log(o);
console.log(z);



const [primieri,segundi] = numerosos;
console.log(primieri);

//rest operador
const [x,...restoNumbers] = numerosos;
console.log(x);
console.log(restoNumbers);
