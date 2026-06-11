const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Ingrese un numero: ", (num) => {
  const numero1 = parseInt(num)

  rl.question("Ingrese otro: ", (num2) => {
    const numero2 = parseInt(num2)

    console.log(`La suma de ${numero1} y ${numero2} es: ${suma(numero1, numero2)}`)
    rl.close()
  })
})

function suma(num1, num2) {
  return num1 + num2
}