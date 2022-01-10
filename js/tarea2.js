//variables
let mascotas = parseInt(prompt("ingrese su cantidad de mascotas"));

//condiciones
if(mascotas >= 1 &&  mascotas <= 2 && mascotas !== String){
    alert("usted tiene pocas mascotas")
}
else if(mascotas >= 3 && mascotas <= 5 && mascotas !== String){
    alert("usted tiene varias mascotas")
}
else if(mascotas >= 5 && mascotas != String){
    alert("usted tiene muchas mascotas")
}
else if(mascotas !== String && mascotas !== 0 ){
    alert("ingrese un caracter numerico")
}
else{
    alert("usted no tiene mascotas")
}
