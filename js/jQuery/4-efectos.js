$(document).ready(function () {
    
    $('#mostrar').hide();

    $('#mostrar').click(function () { 
        $(this).hide();
        $('#ocultar').show();
        $('#caja').show('fast');
    });

    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        $('#caja').hide('fast');
    });

    // tambien estan disponibles los efectos .slideup .fadeIn y .fadeTo que son un fundido, en el .fadeTo se puede asignar la opacidad

    $('#animar').click(function(){
        $('#caja').animate({
                            marginLeft: '500px',
                            borderradius: '999px'

        },'slow')

    })


});