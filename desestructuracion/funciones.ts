const Users ={nombre:"PEPE", password:"1234567890"}
function info(Users:{nombre:string, password:string}):string{
    return `el nombre es : ${Users.nombre},
    la contraseña es : ${Users.password}`;
}
console.log(Users);


//destruct

function mostrarinfo2({nombre,password}:{nombre:string,password:string}):string{
    return `name:${nombre},contra: ${password}`;
}

///console.log(mostrarinfo2(Users));