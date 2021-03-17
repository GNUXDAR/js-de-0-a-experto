$(document).ready(function(){
    /* var result = $('#animals').find('creature');
    var result2 = $('#animals').children();
    console.log(result);
    console.log(result2); */

    //obtener Cats con first() y last()
    var result = $('#animals').children().first().children('.creature').last();
    console.log(result);

    //obtener Cats con prev() y next()
    var prev = $('#animals').children().first().children().last().prev().prev();
    console.log(prev);

    var next = $('#animals').children().first().children().first().next();
    console.log(next);

    //obtener elementos padre
    var parent = $('#cat').parent();
    console.log(parent);

    //obtener elementos padres
    var parent = $('#cat').parents();
    console.log(parent);

    //closest() entrega el parent mas cercano
    var result = $('#cat').closest('.category');
    console.log(result);
});