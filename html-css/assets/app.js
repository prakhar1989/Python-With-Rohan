$(document).ready(function() {
	$('form').on('submit', function(e) {
		e.preventDefault();
		$(this).slideUp(400, function() {
			$('p#msg').show();
		});
		return false;
	});
});
