$(document).ready(function() {
	$('.item-box').on('click', 'a.info-link', function(event){
		event.preventDefault();
		//show() hide()
		/* $(this).closest('.item-box').find('.more-info').toggle(1000, function(){
			alert('se completo!');
		}); */
		//fadeIn fadeOut
		$(this).closest('.item-box').find('.more-info').fadeToggle('slow', 'linear');
	});
	
});