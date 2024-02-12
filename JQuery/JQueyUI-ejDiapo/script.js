"use strict";
$(document).ready(function () {

    var nom ;
    var valoresSeleccionados = [];
    var edad ;
    var fecha;
    $("#draggable").draggable({
        // grid: [300,300]
    });
    $(function () {
        $("#droppable").droppable({
            over: function (event, ui) { //libretas donde se encuetra el eleemnto pero esta prestablecido, podremos identificar el elemento y cambiarlo tambien
                console.log("entro un elemento")
                var elementoArrastrable = ui.draggable; // con esto identificamos al elemento que ese esta moviendo, por eso .dragable, pero podemos identifiacr otro que haga otra cosa
                var idElementoArrastrable = elementoArrastrable.attr("id");
                console.log("el elemtno arrastable tiene id: " + idElementoArrastrable);
                $(this).css('background-color', 'blue');
            }, out: function (event, ui) {
                $(this).css('background-color', 'rgb(119, 12, 57)');
            }
        })
    });


    //----Formulario index----
    $(function () {
        $(document).tooltip();
    });

    $("#miFormulario").on("submit", function (event) {
        event.preventDefault();

        nom = $("#nombre").val();
         edad = $("#edad").val();

        if (edad < 18) {
            $("#modalMenor").dialog("open");

        } else {
            $("#modalMayor").dialog("open")
        }


    })

    //modal menor----------
    $("#modalMenor").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            Cerrar: function () {

                
                $('input[type=checkbox]:checked').each(function () {
                    valoresSeleccionados.push($(this).val());
                });

                console.log("Nombre: ", nom);
                console.log("Edad: ", edad);
                console.log("Aficiones: ", valoresSeleccionados)
                $(this).dialog("close");
            }
        }
    })

    if (!$("#modalMenor").dialog("instance")) {
        $("#modalMenor").dialog();
    }


    //modal mayor----------
    $("#modalMayor").dialog({
        autoOpen: false,
        modal: true,
    })

    $("#abrirModalBtn").on("click", function(){
        $("#modalMayor").dialog("open")
    })

    $(function () {
        $("#fecha").datepicker({
            maxDate: 0,
            dateFormat: "DD, d MM, yy",
            onSelect: function (dateText, inst) {
            fecha= dateText;
            }
        });
    });
    //formulario dentro del modal
    $("#modalMayor").on("submit", function(event){
        event.preventDefault();

        var dni = $("#dni").val();
        var apll = $("#apellidof").val();

        console.log("DNI: ", dni);
        console.log("Apellido: ", apll);
        console.log("Fecha seleccionada: " + fecha)

        if(!$("#modalMayor").dialog("instance")){ //si no esta instanciado me lo instancia, como la primera vez por si acaso da error
            $("#modalMayor").dialog(); // creo el modal que he declarado al principio de todo
        }
        $("#modalMayor").dialog("close");
    })
})
