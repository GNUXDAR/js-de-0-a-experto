$(document).ready(function(){
    $('#add-container').on('click', 'button', function(){
        var value = $('#add-container input').val();
        console.log(value);

        var html = '<div class="item">\
        <div class="remove">x</div>'+ value +'</div>';

        //$('#places-container').children().last().after(html);
        $('#places-container').append(html);
        $('#add-container input').val('');
    });

    $('#places-container').on('click', '.remove', function(){
        var parent = $(this).parent().remove();
    });
});