function calcularResultado() {


    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var operacion = document.getElementById("operacion").value;


    var resultado;
 
    if (operacion === "sumar") {
        resultado = numero1 + numero2;
      } else if (operacion === "restar") {
        resultado = numero1 - numero2;
      } else if (operacion === "multiplicar") {
        resultado = numero1 * numero2;
      } else if (operacion === "dividir") {
        if (numero2 === 0) {
          resultado = "No se puede dividir por cero.";
        } else {
          resultado = numero1 / numero2;
        }
      } else {
        resultado = "Operación no válida";
      }
 
    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
    console.log("Resultado: " + resultado);
    console.log("num1: " + numero1);
    console.log("num2: " + numero2);

  }
 
