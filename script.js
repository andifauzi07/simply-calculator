let result = document.getElementById('screen');
function display(a) {
	if (a == 'ac') {
		result.value = '';
	} else if (a == 'del') {
		result.value = result.value.slice(0, -1);
	} else if (a == '=') {
		try {
			result.value = eval(result.value);
		} catch (error) {
			alert('input error');
		}
	} else {
		result.value += a;
	}
}
