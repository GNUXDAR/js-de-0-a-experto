$(document).ready(function(){
    // seleccion de multiples elementos
   /*  $('#container').html('<b>modificando el container desde jquery</b>');
    $('.class1').text('Elementos cambiados por jquery'); */

    // seleccion descendiente
    $('#listado > li').addClass('highlighted');

    //del fichero form.html
    $('input[required]').addClass('highlighted');
    $('input[placeholder="Phone"]').addClass('highlighted2');
    $('input[placeholder*="Name"]').addClass('highlighted3');
});