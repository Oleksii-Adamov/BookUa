let showForm = function() {
    let popup = document.getElementById('feedback_form_wrapper');
    let overlay = document.getElementById('overlay');
    popup.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('opened_modal');
    document.body.classList.remove('vertical_flex');
    
}

let hideForm = function() {
    let popup = document.getElementById('feedback_form_wrapper');
    let overlay = document.getElementById('overlay');
    popup.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('opened_modal');
    document.body.classList.add('vertical_flex');
}

let clearError = function(elem) {
	elem.classList.remove('error');
	elem.placeholder = "";
}

let addError = function(elem) {
	elem.classList.add('error');
	elem.placeholder = "Поле обв'язкове до заповнення";
}

let validate = function() {
	let flag = true;
	let validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	let fullName = document.getElementById('fullName');
	let phone = document.getElementById('phone');
	let email = document.getElementById('email');

	clearError(fullName);
	clearError(phone);
	clearError(email);
	
	if(fullName.value == ''){
		addError(fullName);
		flag = false;
	}

	if(!phone.value.match(validPhone)){
		addError(phone);
		flag = false;
	}

	if(!email.value.match(validEmail)){
		addError(email);
		flag = false;
	}

	return flag;
}

document.getElementById('feed_back').onclick = showForm;
document.getElementById('feedback_form').onsubmit = validate;
document.getElementById('feed_back_close').onclick = hideForm;
document.getElementById('fullName').onfocus = function(){clearError(this);};
document.getElementById('phone').onfocus = function(){clearError(this);};
document.getElementById('email').onfocus = function(){clearError(this);};