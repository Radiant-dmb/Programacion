const user1 = {
    name: 'Dani',
    edad: 15,
    ticket: true,
    country: 'spain'
}

if(user1.edad >= 18){
    console.log('Es mayor de edad, ergo tiene el acceso permitido.')
} else{
    console.log('No tiene la edad necesaria para acceder al recinto.')
}