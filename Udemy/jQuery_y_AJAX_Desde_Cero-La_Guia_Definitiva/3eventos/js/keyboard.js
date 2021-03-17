$(document).ready(function(){
    $('#example2').on('click', 'a', function(e){
        e.preventDefault();
    });

    //keydown or keyup
    $('#example2').on('keyup', 'input', function(){
        $('#result').html('Your name is: ' + $(this).val());
    });
});