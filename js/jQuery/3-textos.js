$(document).ready(function () {

    reloadLinks();
    $('#add_button').click(function () {
        $('#menu').append('<li><a class=enlaces href="'+$("#add_link").val()+'"></a></li>');
        reloadLinks();
    });



});

function reloadLinks(){
    
    $('.enlaces').each(function () {
        var that = $(this);
        var enlace = that.attr("href");
        that.text(enlace);
    });
}