var create_user_form = function() {
	
	var firstNameInput = $('[name="FirstName"]');
	var lastNameInput = $('[name="LastName"]');
	var userNameInput = $('[name="UserName"]');
	var passwrdInput = $('[name="Password"]');
	var customerRadioButtons = element.all(By.css('.radio>input'));
	var roleOption = element.all(By.css('select option'));
	var emailInput = $('[name="Email"]');
	var cellPhoneInput = $('[name="Mobilephone"]');
	var saveButton = $('.btn-success');
	
	this.inputFirstName = function(firstNameValue) {
		firstNameInput.sendKeys(firstNameValue);
	};
	
	this.inputLastName = function(lastNameValue) {
		lastNameInput.sendKeys(lastNameValue);
	};
	
	this.inputUserName = function(userNameValue) {
		userNameInput.sendKeys(userNameValue);
		userNameInput.sendKeys(protractor.Key.ENTER);
	};
	
	this.inputPassword = function(passwordValue) {
		passwrdInput.sendKeys(passwordValue);
		passwrdInput.sendKeys(protractor.Key.ENTER);
		passwrdInput.sendKeys(protractor.Key.ENTER);
	};
	
	this.chooseCastomer = function(companyValue) {
		customerRadioButtons.then(function(buttons) {
			buttons[companyValue].click();
		});
	};
	
	this.selectRole = function(roleValue) {
		roleOption.then(function(buttons) {
			buttons[roleValue].click();
		});
	};
	
	this.inputEMail = function(eMailValue) {
		emailInput.sendKeys(eMailValue);
	};
	
	this.inputCellPhone = function(cellPhoneValue) {
		cellPhoneInput.sendKeys(cellPhoneValue);
	};
	
	this.clickSaveButton = function() {
		saveButton.click();
	};
	
	this.createNewUser = function(firstNameValue, lastNameValue, userNameValue, passwordValue, companyValue, roleValue, eMailValue, cellPhoneValue) {
	this.inputFirstName(firstNameValue);
	this.inputLastName(lastNameValue);
	this.inputUserName(userNameValue);
	this.inputPassword(passwordValue);
	this.chooseCastomer(companyValue);
	this.selectRole(roleValue);
	this.inputEMail(eMailValue);
	this.inputCellPhone(cellPhoneValue);
	this.clickSaveButton();
	return require('./main_page.js');
	};
};

module.exports = new create_user_form();