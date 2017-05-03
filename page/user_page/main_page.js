var main_page = function() {
	
	var addUserButton = $('.btn.pull-right');
	this.deleteButtons = function() {return element.all(by.css('[ng-click="delUser()"]')); };
	var confirmDeleteButton = element(by.buttonText("OK"));
	var searchInput = element(by.model("searchValue"));
	this.allUsers = function() {return element.all(by.css('tbody tr')); };
	var allUserData = by.css('td'); 
	var sortByFirstName = element(by.css('.smart-table-header-row :nth-child(1) span'));
	
	this.addUserButtonClick = function() {
		addUserButton.click();
		return require('./create_user_form.js');
	};
	
	this.makeSearch = function(userNameValue) {
		searchInput.sendKeys(userNameValue);
	};
	
	this.deleteUser = function(){
		this.deleteButtons().then(function(deleteButton){
			deleteButton[0].click();
			confirmDeleteButton.click();
		});
	};
	
	this.getEmptyUserList = function(){
		return this.allUsers().count();
	};
	
	this.sortByFirstNameClick = function(){
		sortByFirstName.click();
	};
	
	this.getDataFromFirstUser = function(index){
		return this.allUsers().then(function(users){
			return users[0];
		}).then(function(user){
			return user.all(allUserData).then(function(userData){
					return userData[index].getText();
			});
		});
	};
	
	this.getDataFromLastUser = function(index){
		return this.allUsers().then(function(users){
			return users[users.length-1];
		}).then(function(user){
			return user.all(allUserData).then(function(userData){
					return userData[index].getText();
			});
		});
	};
	
	
	
};

module.exports = new main_page();