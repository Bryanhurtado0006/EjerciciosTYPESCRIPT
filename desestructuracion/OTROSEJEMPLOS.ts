/*1. Crea una función que reciba un objeto de tipo Libro con propiedades titulo, autor y
añoPublicacion, y retorne una cadena con esta información utilizando desestructuración.*/
const Propiedadess={title:"100 years of solitude ",autor:"Garcia Marquez",anioPublicacion:1982}

function infos ({title, autor,anioPublicacion}:{title:string;autor:string;anioPublicacion:number}):string{
    return `el autor e:${Propiedadess.autor},
            el titulo e: ${Propiedadess.title},
            año: ${Propiedadess.anioPublicacion}`;

}

//console.log(infos(Propiedadess));


//DEST
function infodo({title,autor,anioPublicacion}:
    {title:string,autor:string,anioPublicacion:number}):string{
        return`tituloo:${title},autor:${autor},año${anioPublicacion}`;

    }
    //console.log(infodo(Propiedadess));


    /*2 Dado un arreglo de nombres de colores, usa la desestructuración para obtener el primer y
    el último color del arreglo.*/

    const colorsss:string[]=["VERDE","AXUL","ROGO"];
    function imprimirr([primero,tercero]:string[]):string{
        return `el primero valor e:${primero} el segundo:${tercero}`;
    }
    console.log(imprimirr(colorsss));

    /*3 Crea una función que reciba un objeto con propiedades nombre y edad, pero si no se
proporciona edad, debe asignar un valor por defecto de 18. Usa desestructuración.*/

const esteMen={
    nombre:"Julio voltio",
    edad:18
}

function mosctrac({nombre,edad=18}:{nombre:string,edad:number}):any{
return `el nombre e:${nombre}, y tiene:${edad}`;
}
console.log(mosctrac(esteMen));

/*4 Crea un objeto persona con las propiedades nombreCompleto y edad. Usa la
desestructuración para renombrar nombreCompleto a nombre y edad a años.*/

const victor2={
    nombreCom:"khalifa",
    edak:12
}
const {nombreCom:nombree, edak:años}=victor2;
console.log(nombree);
console.log(años);o


