$(document).ready(function(){
    $('#example').on('click', 'button.switch', function(){
        //console.log(this);
        $(this).parent().toggleClass('highlighted');
    });
});