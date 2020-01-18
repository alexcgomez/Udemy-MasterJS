
// $ hace referencia a jQuery, si ponemos jQuery en su lugar tambien funciona
// .ready() es un evento con una funcion de callback
$(document).ready(function () {

    // Selectores de ID
    $('#rojo').css('background', 'red')
        .css('color', 'white');
    $('#amarillo').css('background', 'yellow')
        .css('color', 'green');

    // Selectores de clase
    var mi_clase = $('.zebra');
    mi_clase.css('border','dashed','black')

    $('#rojo').click(function () { 
        $(this).css('color','black')
    });

    // Selectores de etiqueta
 
    $('p').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('zebra');
        
    });
    





});