//calculadora de suma y resta
const calculadora = () => {
    var saludo = confirm('Quieres realizar un calculo de suma o resta?')
    
    if(saludo == true ){
        const numero1 = parseInt(prompt('ingrese el primer numero'));
        const numero2 = parseInt(prompt('ingrese el segundo numero'));
        const calculo = prompt('Escriba la palabra del calculo que deseas realizar entre suma y resta, Ej:"suma"');
        const sumar = `La suma es: ${numero1+numero2}`;
        const resta = `La resta es: ${numero1-numero2}`;
        if(calculo == 'suma'){
            alert(sumar);
            document.write(sumar);
            console.log(sumar);
        }    
        else if(calculo == 'resta'){
            alert(resta);
            document.write(resta);
            console.log(resta);
        }    
    }else{
        alert('hiciste click en cancelar')
        alert('Prueba devuelta cuando quieras calcular')
    }
}

calculadora();
