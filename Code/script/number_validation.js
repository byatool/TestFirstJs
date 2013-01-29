function does_not_contain_a_character(currentText){
	return (currentText) ||  (isNaN(currentText[0] ? false : contains_a_character(currentText.substr(1))));
}

function has_a_valid_length(text){
	return text.length == 9
}

function is_set_to_a_viable_string(text){
	return text ? text.replace(new RegExp("-","gm"),"") : false
}

function is_real_social_security_number (argument) {
	var plainText;

	return (plainText = is_set_to_a_viable_string(argument))
			&& (does_not_contain_a_character(plainText)) 
			&& (has_a_valid_length(plainText));
}