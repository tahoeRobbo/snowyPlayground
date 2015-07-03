var previewFile = function() {
	var file = document.querySelector('input[type=file]').files[0];
	var preview = document.querySelector('#preview');
	var reader = new FileReader();
	
	if(file) {
		reader.readAsDataURL(file);
	}
	
	reader.onloadend = function() {
		preview.src = reader.result;
	}
};