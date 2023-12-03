"use strict;"

//valores alamcenados el localStorGE
  // Aplicar preferencias almacenadas o valores predeterminados
  document.getElementById('bgColor').value = localStorage.getItem('bgColor') || '#ffffff'; // blanco predeterminado
  document.getElementById('fontSize').value = localStorage.getItem('fontSize') || 16; // tamaño predeterminado

// Aplicar cambios al cargar la página
applyPreferences();

  function applyPreferences(){
// Obtener los valores seleccionados
    var fondoColor=document.getElementById('bgColor').value;
    var fontSize=document.getElementById('fontSize').value;
//aplicar cambios
    document.body.style.backgroundColor = fondoColor;
    document.body.style.fontSize = fontSize + 'px';
//almacenar preferencias en el localStorage
localStorage.setItem('bgColor',fondoColor);
localStorage.setItem('fontSize',fontSize);

}

 