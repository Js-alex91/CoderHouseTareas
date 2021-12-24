//variables
let mascotas = parseInt(prompt("ingrese su cantidad de mascotas"));

//condiciones
if(mascotas >= 1 &&  mascotas <= 2 ){
    alert("usted tiene pocas mascotas")
}
else if(mascotas >= 3 && mascotas <= 5){
    alert("usted tiene varias mascotas")
}
else if(mascotas >= 5 ){
    alert("usted tiene muchas mascotas")
}
else if(mascotas != String){
    alert("ingrese un caracter numerico")
}
else{
    alert("usted no tiene mascotas")
}
