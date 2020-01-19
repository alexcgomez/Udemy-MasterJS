$(document).ready(function () {

    // MouseOver y MouseOut

    var caja = $('#caja');

    // caja.mouseover(function () { 
    //     $(this).css('background','blue');
    //     $(this).css('transition','1500ms')
    // });

    // caja.mouseout(function () { 
    //     $(this).css('background','#ccc');
    //     $(this).css('transition','1500ms')

    // });


    // Hover
    function transicionAzul() {
        $(this).css('background', 'blue');
        $(this).css('transition', '1500ms')
    }

    function transicionGris() {
        $(this).css('background', '#ccc');
        $(this).css('transition', '1500ms')
    }
    caja.hover(transicionAzul, transicionGris);

    // Click, doble click

    caja.click(function () {
        $(this).css('background', 'red');
    });

    caja.dblclick(function () {
        $(this).css('color', 'green');
    })

    // Focus y blur


    $('#nombre').focus(function (e) {
        e.preventDefault();
        //  $(this).css('border','2px solid green')
    });

    var datos = $('#datos');

    $('#nombre').blur(function (e) {
        e.preventDefault();
        $(this).css('border', '2px solid #ccc')
        datos.text($(this).val()).show();
    });

    // Mouse Down y mouse up

    datos.mousedown(function () {
        $(this).css('border-color', '#ccc')
    });
    datos.mouseup(function () {
        $(this).css('border-color', 'black')
    });

    // Mouse move

    $(document).mousemove(function (e) {
        // values: e.clientX, e.clientY, e.pageX, e.pageY
     
        $('#sigueme').css('left',e.clientX-15)
                     .css('top',e.clientY-15);


    });







});