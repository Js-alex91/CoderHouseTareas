
var salir = 'n'
var numeros = []

while (salir == 'n') {
    numero = prompt('ingresa un número')
    if (numero != null) {
        numeros.push(parseInt(numero))
    }
    var seguir = confirm('desea ingresar mas numeros')
    if (seguir == false) {
        salir = 'y'
    }
}

document.write(numeros)