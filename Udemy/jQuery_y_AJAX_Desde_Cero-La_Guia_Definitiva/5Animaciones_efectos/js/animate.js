$(document).ready(function() {
	$('#example1').on('click', function(){
		$(this).animate({
			opacity: 0.3
		}, 'fast', function() {alert('se ha completado')});
	});

	$('#example2').on('click', function(){
		$(this).animate({
			left: 200,
			width: 50
		}, 'slow');
	});

	$('#example3').on('click', function(){
		$(this).animate({
			left: '+=50',
			width: 200
		}, 'slow');
	});
});