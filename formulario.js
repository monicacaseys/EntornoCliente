'use strict';

 
  function calcularDNI() {
    var letras2 = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var dni=document.getElementById('dni').value;
    var letra=document.getElementById('letra').value;
    var resultado=document.getElementById('resultado');
    
    if (dni.length === 8){
        var resto= dni%23;
        var encontrado = letras2.charAt(resto);

        if (letra.toUpperCase()===encontrado){
        resultado.textContent="el dni es valido";
        } else{
            resultado.textContent="el dni no es valido";
      
        }
    }
    return false;
 
  }
