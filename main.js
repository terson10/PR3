'use strict'
function formattedPhone(phone) {
	phone = phone.split('');
	for (let i = 0; i < phone.length; i++) {
		if (phone[i] == ' ') {
			phone.splice(i, 1)
			i--;
		};
	};
	if (phone[0] != '+') {
		console.log(`Номер должен начинатся с \"+\"`);
		return '';
	};
	if (phone[1] != '7') {
		console.log(`Номер должен начинатся с \"+7\"`);
		return '';
	};
	for (let i = 2; i < phone.length; i++) {
		if (isNaN(Number(phone[i]))) {
			console.log("В номере введен не верный символ");
			return '';
		}
	};
	if (phone.length != 12) {
		console.log("В номере должно быть 12 символов");
		return '';
	};
	phone.splice(2, 0, " (");
	phone.splice(6, 0, ") ");
	phone.splice(10, 0, "-");
	phone.splice(13, 0, "-");
	phone = phone.join('');
	return phone;
}
console.log(formattedPhone('+7123 456 7890'));
