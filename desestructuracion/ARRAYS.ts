const nameg:string[]=["JON Z", "BRYAN MYERS", "COBY"];
function imprimicositas([primero,...resto]:string[]):string{
    return `el valor one e: ${primero} y e otro e: ${resto}`;
}
console.log(imprimicositas(nameg));