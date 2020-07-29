// console.log('Привет Консоль! 111111');
// alert('Alert - Сообщение!');

$(document).ready( function(){
	$(".datepicker").datepicker({ dateFormat: 'dd.mm.yy' });

	$('#input-name').on('keydown', function(){
		$('#error-name').fadeOut();
	});

	$('#input-email').on('keydown', function(){
		$('#error-email').fadeOut();
	});

	$('#input-message').on('keydown', function(){
		$('#error-message').fadeOut();
	});

	var showError = function(name, text){
		var $message = $('<div class="message message--error" id=' + name + '>');
			$message.text( text );
			$message.hide();
			$('#form-notify').append( $message );
			$message.fadeIn(500);
	}

	$('#contact-form5555').on('submit', function(e){
		e.preventDefault();

		if ( $('#input-name').val() == '' ) {
			showError('error-name', 'Заполните имя');
			var error = true;
		}

		if ( $('#input-email').val() == '' ) {
			showError('error-email', 'Заполните email');
			var error = true;
		}

		if ( $('#input-message').val() == '' ) {
			showError('error-message', 'Заполните сообщение');
			var error = true;
		}

		if ( error !== true) {
			// отправляем форму
			var $message = $('<div class="message message--success">');
				$message.text('Ваше сообщение отправлено! Скоро мы свяжемся с вами.');
				$message.hide();
				$('#form-notify').append( $message );
				$message.fadeIn(500);
		}
		
	});

});


