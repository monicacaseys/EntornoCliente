//hacemos oferta y produuctos al 25% ademas saber si un cliente se lleva kg de cada cosa a cuantro saldria. 
//Lista precios noe sta ordenada y productos si, fresas mas caras despues platanos  despues peras y manzanas. 
//debemos mostrar si hay un presio mayor que 4 y si hay un precio mas bajo de 2, ademas mostrar el mas alto y el mas bajo.
//se acabn los platanos asique se elimina pero se añaden galletas a 5,5 y zumo de 4

var frutas=["Fresas","Platanos","Peras","Manzanas"];
var precios=[1.5,2,0.75,3];
precios[0]=3;
precios[1]=2;
precios[2]=1.5;
precios[3]=0.75;

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i] + ": $" + precios[i]);
}
console.log("--------------");

var decuentos= precios.map(Element=>Element-(Element*0.25));  //asi es mejor que con el for. te quita directamente 

var total=decuentos.reduce((Acumulator,current)=>Acumulator+current); //SUMA LOS VALORES DE UN ARRAY
console.log(total);
console.log("--------------");

// Recorremos el array de precios
var resultadoPrueba=precios.some(Element=>Element>4);
var resultadoPrueba2=precios.some(Element=>Element<2);
console.log(resultadoPrueba);
console.log(resultadoPrueba2);

// Encontrar el precio más bajo y el precio más alto
var precioMasBajo = Math.min(...precios);
var precioMasAlto = Math.max(...precios);

console.log("Precio más bajo: $" + precioMasBajo);
console.log("Precio más alto: $" + precioMasAlto);


console.log("--------------");


// Buscamos y eliminamos "Platanos" del array de frutas
var indicePlatanos = frutas.indexOf("Platanos");
if (indicePlatanos !== -1) {
    frutas.splice(indicePlatanos, 1);
    // Eliminamos el precio correspondiente de "Platanos" del array de precios
    precios.splice(indicePlatanos, 1);
}

// Agregamos "Galletas" y "Zumo" al final del array de frutas y precios
frutas.push("Galletas", "Zumo");
precios.push(5.5, 4);

// Mostramos la lista de frutas actualizada
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i] + ": $" + precios[i]);
}