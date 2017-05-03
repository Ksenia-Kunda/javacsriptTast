describe ('create, delete and sort users tests', function() {
	
	var create_user_form;
	var main_page = require('../page/user_page/main_page.js');
	var URL = 'http://www.way2automation.com/angularjs-protractor/webtables';
	var testData = require('./resources/testdata.json');
	var firstName = 'Luke';
	var lastName = 'Skywalker';
	var passwrd = 'starwars123';
	var email = 'lskywalkertest@some.com';
	var cellPhone = '123456789';
	
	beforeEach(function() {
		browser.get(URL);
	});
	
	testData.forEach(function(data) {
		it ('should search a user by userName and show created user', function() {
		userName = data.userName;
		create_user_form = main_page.addUserButtonClick();
		main_page= create_user_form.createNewUser(firstName, lastName, userName, passwrd, 
									data.customerNumber, data.roleNumber, email, cellPhone);
		main_page.makeSearch(userName);
		main_page.getDataFromFirstUser(0).then(function(name){ 
		expect(name).toEqual(firstName);});
		main_page.getDataFromFirstUser(1).then(function(name){ 
		expect(name).toEqual(lastName);});
		main_page.getDataFromFirstUser(5).then(function(name){ 
		expect(name).toEqual(data.roleString);});
		});		
	});
	
	describe ('should delete user', function() {
		var userName = "luke_admin";
		var customer = 0;
		var role = "3";
	
		it ('should delete a user', function() {
		create_user_form = main_page.addUserButtonClick();
		main_page= create_user_form.createNewUser(firstName, lastName, userName, passwrd, 
									customer, role, email, cellPhone);
		main_page.deleteUser();
		main_page.makeSearch(userName);
		expect(main_page.getEmptyUserList()).toBe(0);
		});

	it ('should sort users by firstName', function() {
		firstName = '0_Luke';
		create_user_form = main_page.addUserButtonClick();
		main_page = create_user_form.createNewUser(firstName, lastName, userName, passwrd, 
									customer, role, email, cellPhone);
		main_page.sortByFirstNameClick();
		main_page.getDataFromLastUser(0).then(function(name){
		expect(name).toEqual(firstName); });
		main_page.sortByFirstNameClick();
		main_page.getDataFromFirstUser(0).then(function(name){ 
		expect(name).toEqual(firstName);});
		});
	});
});