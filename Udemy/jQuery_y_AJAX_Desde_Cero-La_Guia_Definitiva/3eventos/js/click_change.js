$(document).ready(function(){
/*     $('#example2').on('click', 'button', function(){
        //selected and data
        var selected = $('#example2 select option:selected');
        var value = selected.val();
        var price = selected.data('price');

        console.log(value);
        console.log(price);
        console.log(selected.attr('data-price'));

        if(price) {
            $('#result').html(value + ' ' + price);
        }
    }); */

    //change method
    $('#example2').on('change', '#place', function(){
        var selected = $('#place option:selected');
        var value = selected.val();
        var price = selected.data('price');

        if (price) {
            $('#result').html(value + ' ' + price);
        }
    });
});
