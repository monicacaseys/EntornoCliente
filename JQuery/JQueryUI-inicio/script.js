"use strict";
$(document).ready(function () {
    //deja mover el cuadrado por toda la pagina
    $("#draggable").draggable({
        // grid: [300,300]
    });
    //deja mover el tecto solo dentro del cuadrado
    $("#parrafo").draggable({
        containment: "parent"
    });
    $("#parrafo").dblclick(function () {
        $(this).draggable("disable");
    });

    //cuando entra o sale el elemento verde en el morado sale menaje en consola
    $(function () {
        $("#droppable").droppable({
            over: function (event, ui) { //libretas donde se encuetra el eleemnto pero esta prestablecido, podremos identificar el elemento y cambiarlo tambien
                console.log("entro un elemento")
                var elementoArrastrable = ui.draggable; // con esto identificamos al elemento que ese esta moviendo, por eso .dragable, pero podemos identifiacr otro que haga otra cosa
                var idElementoArrastrable = elementoArrastrable.attr("id");
                console.log("el elemtno arrastable tiene id: " + idElementoArrastrable);
            },
            out: function (event, ui) {
                console.log("salio un elemento")
            }
        })
    });
    


   
    //Mover elementos de una lista
    $(function(){
        $("#sortable").sortable()
    })
     //Abre desplegable
    $(function(){
        $("#accordion").accordion()
    })

    //a medida que escribes te lo autocompleta
    $(function () {
        var variablesEjemplo = ["Manzanas", "Fresas", "Lima", "Pera", "Moras"];
        $("#alimentos").autocomplete({
            source: variablesEjemplo,
            messages: {
                noResults: "No se encontraron resultados",
                results: function (count) {
                    return count + (count === 1 ? " resultado encotrado" : "resultados enconrados");
                }
            }
        })

    });
    //meter un calendario
    $(function () {
        $("#fecha").datepicker({
            minDate: 0,
            maxDate: "15D", //slecionar solo mas de 15 dias desde hoy
            dateFormat: "DD, d MM, yy",
            onSelect: function (dateText, inst) {
                console.log("Fecha seleccionada: " + dateText) //fecha seleccionada en console log
            },
            beforeShowDay: function(date){
            var date=date.getDate();
            return [day !== 0 && day !==6,""];
            }
        });
    });
    //Modal pulso y sale el modal con algo

    $("#modal").dialog({
        autoOpen: false,
        modal: true,
        title: "titulo",
        with: "700px",
        resizable: true,
        draggable: false,
        buttons: {
            Aceptar: function () {
                $(this).dialog("close");
            }, Cerrar: function(){
                console.log("pulse un boton");
                $(this).dialog("close");
            }
        }
    });
    //cuando le doy click se abre
   /* ESTA FORMA SIN EL IF TAMBIEN VALE PERO A AVECES DA ERRROR Y PROFAMOS CON EL IF
    $("#abrirModal").on("click", function () {
        $("#modal").dialog(("open"))
    }); */
    $("#abrirModal").on("click", function () {
        if (!$("#modal").dialog("instance")) {
            $("#modal").dialog();
        }
        $("#modal").dialog(("open"))
    });

    //------------- Mostrar datos del modal ------------
    $("#modal1").dialog({
        autoOpen: false,
        modal: true,
    })
    $("#nombre, #apellido").on("blur",function(){
        var nom = $("#nombre").val();
        var apell = $("#apellido").val();

        $("#nombreModal").text("Nombre: "+nom);
        $("#apellidoModal").text("Apellido: "+apell);


    })

    $("#mostrarModalBtn").on("click",function(){
        if(!$("#miFormulario").dialog("instance")){ //si no esta instanciado me lo instancia, como la primera vez por si acaso da error
            $("#miFormulario").dialog(); // creo el modal que he declarado al principio de todo
        }
        $("#miFormulario").dialog("open");
    })
    //-------------Mostrar Formulario en modal e imprimir en consola ------------

    $("#modalFormulario").dialog({
        autoOpen: false,
        modal: true,
    })

    $("#abrirModalBtn").on("click", function(){
        $("#modalFormulario").dialog("open")
    })

    $("#miFormulario").on("submit", function(event){
        event.preventDefault();

        var nom = $("#nombref").val();
        var apll = $("#apellidof").val();

        console.log("Nombre: ", nom);
        console.log("Apellido: ", apll);

        if(!$("#miFormulario").dialog("instance")){ //si no esta instanciado me lo instancia, como la primera vez por si acaso da error
            $("#miFormulario").dialog(); // creo el modal que he declarado al principio de todo
        }
        $("#miFormulario").dialog("close");
    })
})