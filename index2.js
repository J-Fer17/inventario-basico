const producto = require('readline');
const interfaz = producto.createInterface({
    input: process.stdin,
    output: process.stdout
});
interfaz.question('Nombre del producto 1: ', function(nombreproducto) {
    interfaz.question('Precio unitario del producto 1: ', function(precio) {
        interfaz.question('Cantidad en stock del producto 1: ', function(cantidad) {  
            interfaz.question('Nombre del producto 2: ', function(nombreproducto2) {
                interfaz.question('Precio unitario del producto 2: ', function(precio2) {
                    interfaz.question('Cantidad en stock del producto 2: ', function(cantidad2) {
                        interfaz.question('Nombre del producto 3: ', function(nombreproducto3) {
                            interfaz.question('Precio unitario del producto 3: ', function(precio3) {
                                interfaz.question('Cantidad en stock del producto 3: ', function(cantidad3) {
                                    const total = (parseFloat(precio) * parseFloat(cantidad)) + 
              (parseFloat(precio2) * parseFloat(cantidad2)) + 
              (parseFloat(precio3) * parseFloat(cantidad3));

console.log('•= SISTEMA BÁSICO DE INVENTARIO •=');
console.log('Producto 1 registrado: ' + nombreproducto);
console.log('Precio unitario del producto 1: ' + precio);
console.log('Unidades disponibles del producto 1: ' + cantidad);
console.log('Producto 2 registrado: ' + nombreproducto2);
console.log('Precio unitario del producto 2: ' + precio2);
console.log('Unidades disponibles del producto 2: ' + cantidad2);
console.log('Producto 3 registrado: ' + nombreproducto3);
console.log('Precio unitario del producto 3: ' + precio3);
console.log('Unidades disponibles del producto 3: ' + cantidad3);
console.log('Valor total del inventario: $' + total);

interfaz.close();

});

});

});

});

});

});
});
});

});