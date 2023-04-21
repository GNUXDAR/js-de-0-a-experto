$(document).ready(function(){
    $('#add-container').on('click', 'button', function(){
        var value = $('#add-container input').val();
        console.log(value);

        var html = '<div class="item">\
        <div class="remove">x</div>'+ value +'</div>';

        //$('#places-container').append(html); //agrega al final
        //$(html).appendTo('#places-container');

        //$('#places-container').prepend(html); //agrega al inicio
        $(html).prependTo('#places-container');
        $('#add-container input').val('');
    });
});