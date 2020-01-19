$(function () {

    // Draggable permite mover elementos por la pagina
    $('.elemento').draggable();

    // Metodo resizable permite redimensionar elementos
    $('.elemento').resizable();

    // Seleccionar y ordenar elementos
    // $('.lista_seleccionable').selectable();
    $('.lista_seleccionable').sortable();

    // Drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function () {
            console.log('has movido elemento');

        }
    });

    // Efectos
    $('#mostrar').click(function (e) {
        e.preventDefault();
        $('.caja-efectos').toggle('shake', 'slow')
    });

    $(document).tooltip();

    // Dialog
    $('#popup').dialog();

    // Tabs

    $('#pestanas').tabs();



});