"use strict";
var zona = document.getElementById("container");

function arrastrar(event) {
    //extraigo la id del elemento que estamos arrastrando
    var idImagen = event.target.id;
    //con este método estamos configurando los datos que vamos a conservar del objeto que estamos arrastrando
    event.dataTransfer.setData("text/plain", idImagen);
}
function mover(event) {
  event.preventDefault();
  zona.style.background = "#89CFF0";
}

//cuando soltamos, prevenimos el evento
function soltar(event) {
  event.preventDefault();

  //recuperamos la id que hemos pasado desde el método arrastrar
  //y buscamos el elemento por su id
  var idelemento = event.dataTransfer.getData("text/plain");
  var elemento = document.getElementById(idelemento);


  // Verificar si hay tres elementos en el cuadro
  var elementosEnCuadro = zona.getElementsByClassName("draggable-item");
  if (elementosEnCuadro.length === 3) {
      // No permitir mover más elementos si ya hay tres en el cuadro
      return;
  }
   // Verificar si la imagen de Tristeza está dentro de la zona
   if (idelemento === "tristeza") {
      var iraEleemnt= document.getElementById("ira");
       iraEleemnt.draggable=true;
   }

  // Crear una nueva imagen con la misma ruta, el la misma clase, en este caso no será draggable
  //devolvemos el fondo al estado inicial
  var nuevaImagen = new Image();
  nuevaImagen.src = elemento.src;
  nuevaImagen.className = "draggable-item";
  nuevaImagen.draggable = false;
  zona.style.background = "initial";
  //para que las imagenes no se dupliquen extraemos el padre para poder usar la funcion removeChild
  var padre = elemento.parentNode;
  padre.removeChild(elemento);
  //eliminada la foto antigua le damos el mismo id a la nuva imagen y la insertamos. 
  nuevaImagen.id = idelemento;
  document.getElementById("container").appendChild(nuevaImagen);
}

function fondo(event) {
  event.preventDefault();
  zona.style.background = "initial";
}
//////////////////////////////////////////////////////////////

function highlightCell(cellId) {
    let cell = document.getElementById(cellId);
    cell.style.border = "6px solid blue";
  }
  
  function unhighlightCell(cellId) {
    let cell = document.getElementById(cellId);
    cell.style.border = "";
  }
  
  const squares = document.querySelectorAll('.square');
  let symbols = ['', '', '', '', '', '', '', '', ''];
  let currentPlayer = 'player1'; 
  
  function drawSymbol(index) {
    const square = document.getElementById(index);
    if (symbols[index] === '') {
      square.textContent = currentPlayer === 'player1' ? '♘' : '♙'; 
      square.style.fontWeight = 'bold';
      symbols[index] = currentPlayer === 'player1' ? '♘' : '♙'; 
      checkWin();
      currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1'; 
    }
  }
  
  function checkWin() {
    const rows = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    ];
    const columns = [[0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    ];
    const diagonals = [[0, 4, 8],
    [2, 4, 6],
    ];
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const col = columns[i];
      if (symbols[row[0]] !== '' && symbols[row[0]] === symbols[row[1]] && symbols[row[1]] === symbols[row[2]]) {
        alert(`¡${currentPlayer === 'player1' ? 'Jugador 1' : 'Jugador 2'} ha ganado! Si quieres volver a jugar te recomiendo que recargues la página`);
        return;
      }
      if (symbols[col[0]] !== '' && symbols[col[0]] === symbols[col[1]] && symbols[col[1]] === symbols[col[2]]) {
        alert(`¡${currentPlayer === 'player1' ? 'Jugador 1' : 'Jugador 2'} ha ganado! Si quieres volver a jugar te recomiendo que recargues la página`);
        return;
      }
    }
    for (let i = 0; i < diagonals.length; i++) {
      const diag = diagonals[i];
      if (symbols[diag[0]] !== '' && symbols[diag[0]] === symbols[diag[1]] && symbols[diag[1]] === symbols[diag[2]]) {
        alert(`¡${currentPlayer === 'player1' ? 'Jugador 1' : 'Jugador 2'} ha ganado! Si quieres volver a jugar te recomiendo que recargues la página`);
        return;
      }
    }
    if (symbols[0] !== '' && symbols[0] === symbols[4] && symbols[4] === symbols[8]) {
      alert(`¡${currentPlayer === 'player1' ? 'Jugador 1' : 'Jugador 2'} ha ganado! Si quieres volver a jugar te recomiendo que recargues la página`);
      return;
    }
    if (symbols[2] !== '' && symbols[2] === symbols[4] && symbols[4] === symbols[6]) {
      alert(`¡${currentPlayer === 'player1' ? 'Jugador 1' : 'Jugador 2'} ha ganado! Si quieres volver a jugar te recomiendo que recargues la página`);
      return;
    }
  }