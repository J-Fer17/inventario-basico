const usuario = require('readline');
const rl = usuario.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Nombre del producto: ', function(nombre) {
     rl.question('Precio unitario: ', function(precio) {
        rl.question('Cantidad en stock: ', function(cantidad) {
            const total = parseFloat(precio) * parseFloat(cantidad);
            console.log('SISTEMA BASICO DE INVENTARIO');
            console.log('Producto registrado: ' + nombre);
            console.log('Precio unitario: ' + precio);
            console.log('Unidades disponibles: ' + cantidad);
            console.log('Valor total del inventario: ' + total);

            rl.close();

        });

    });

});
