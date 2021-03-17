$(document).ready(function(){
    $('#example').on('click', function(){
/*         console.log('holamundo');
        console.log(this);
        console.log($(this)); */

        //$('#example').addClass('highlighted');
        $(this).toggleClass('highlighted'); //le agrega la clase si no esta presente/ si esta presenta la quita
    });
});