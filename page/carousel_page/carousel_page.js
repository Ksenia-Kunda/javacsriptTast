var carousel_page = function() {
	
	this.allIndicators = function() {return element.all(by.css('ol li'));};
	this.allActiveIndicators = function() {return element.all(by.css('ol li.active')); };
	this.allSlides = function() {return element.all(by.css('.carousel-inner .item')); };
	var addSlideButton = element(by.css('[ng-click="addSlide()"]'));
	var randomizeSlidesButton = element(by.css('[ng-click="randomize()"]'));
	var nextButton = element(by.css('a.right'));
	var previousButton = element(by.css('a.left'));
	var intervalInput = element(by.css('[ng-model="myInterval"]'));
	var disableSlideLoopingCheckBox = element(by.css('[ng-model="noWrapSlides"]'));
	var attributeName = "class";
	
	this.getAllIndicatorsLength = function(){
		return this.allIndicators().then(function(indicators){
			return indicators.length;
		});
	};
	
	this.getAllActiveIndicators = function(){
		return this.allActiveIndicators().count();
	};
	
	this.getAllSlidesLength = function(){
		return this.allSlides().count();
	};
	
	this.addSlideClick = function(){
		addSlideButton.click();
	};
	
	this.randomizeSlidesClick = function(){
		randomizeSlidesButton.click();
	};
	
	this.clickOnIndicator = function(index){
		return this.allIndicators().then(function(indicator){
			indicator[index].click();
		});
	};
	
	this.getActiveIndicator = function(index){
		return this.allIndicators().then(function(indicator){
			return indicator[index];
		}).then(function(classValue){
			return classValue.getAttribute(attributeName);
		});
	};
	
	this.getActiveSlide = function(index){
		return this.allSlides().then(function(slide){
			return slide[index];
		}).then(function(classValue){
			return classValue.getAttribute(attributeName);
		});
	};
	
	this.clickOnNext = function(){
			nextButton.click();
	};
	
	this.clickOnPrevious = function(){
			previousButton.click();
	};
	
	this.setIntervalValue = function(intervalValue){
		intervalInput.clear();
		intervalInput.sendKeys(intervalValue);
	};
	
	this.setDisableSlideLooping = function(intervalValue){
		disableSlideLoopingCheckBox.click();
	};
	
};
module.exports = new carousel_page();