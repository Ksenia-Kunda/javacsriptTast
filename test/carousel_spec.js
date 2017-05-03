describe ('carousel tests', function() {
	
	var carousel_page = require('../page/carousel_page/carousel_page.js');
	var URL = 'https://angular-ui.github.io/bootstrap/';
	var activeIndicatorClass = "ng-scope active";
	var activeSlideClass = "ng-scope ng-isolate-scope item active";
	
	beforeEach(function() {
		browser.get(URL);
	});
	
	describe ('Should check that the amount of slides is equal to the amount of indicators', function() {
		it('amount equals at start', function() {
			expect(carousel_page.getAllIndicatorsLength()).toBe(carousel_page.getAllSlidesLength());
		});
		it('amount equals after adding new slide', function() {
			carousel_page.addSlideClick();
			expect(carousel_page.getAllIndicatorsLength()).toBe(carousel_page.getAllSlidesLength());
		});
		it('amount equals after randomizing', function() {
			carousel_page.randomizeSlidesClick();
			expect(carousel_page.getAllIndicatorsLength()).toBe(carousel_page.getAllSlidesLength());
		});
	});
	
	it('Should select only one indecator', function() {
		carousel_page.clickOnIndicator(1);
		carousel_page.clickOnIndicator(2);
		expect(carousel_page.getAllActiveIndicators()).toBe(1);
	});
		
		
	it('should go to next when clicking next button', function() {
		carousel_page.clickOnIndicator(0);
		carousel_page.clickOnNext();
		carousel_page.getActiveIndicator(1).then(function(value) { 
			expect(value).toMatch(activeIndicatorClass);});
		carousel_page.clickOnNext();
		carousel_page.getActiveIndicator(2).then(function(value) { 
			expect(value).toMatch(activeIndicatorClass);});
		carousel_page.clickOnNext();
		carousel_page.getActiveIndicator(3).then(function(value) { 
			expect(value).toMatch(activeIndicatorClass);});
	});
	
	it('should go to previous when clicking previous button', function() {
		carousel_page.clickOnIndicator(3);
		carousel_page.clickOnPrevious();
		carousel_page.getActiveIndicator(2).then(function(value) { 
			expect(value).toMatch(activeIndicatorClass);});
		carousel_page.clickOnPrevious();
		carousel_page.getActiveIndicator(1).then(function(value) { 
			expect(value).toMatch(activeIndicatorClass);});
		carousel_page.clickOnPrevious();
		carousel_page.getActiveIndicator(0).then(function(value) { 
			expect(value).toMatch(activeIndicatorClass);});
	});
	
	it('should loop to first slide when clicking next button on last slide', function() {
		carousel_page.clickOnIndicator(3);
		carousel_page.clickOnNext();
		carousel_page.getActiveIndicator(0).then(function(value) { 
			expect(value).toMatch(activeIndicatorClass);});
	});
	
	it('should loop to last slide when clicking previous button on first slide', function() {
		carousel_page.clickOnIndicator(0);
		carousel_page.clickOnPrevious();
		carousel_page.getActiveIndicator(3).then(function(value) { 
			expect(value).toMatch(activeIndicatorClass);});
	});
	
	describe ('Disable Slide Looping is active', function(){
		beforeEach(function(){
			carousel_page.setDisableSlideLooping();
		});
		
		it('should not loop to first slide when clicking next button on last slide', function() {
			carousel_page.clickOnIndicator(3);
			carousel_page.clickOnNext();
			carousel_page.getActiveIndicator(3).then(function(value) { 
			expect(value).toMatch(activeIndicatorClass);});
		});
	
		it('should not loop to last slide when clicking previous button on first slide', function() {
			carousel_page.clickOnIndicator(0);
			carousel_page.clickOnPrevious();
			carousel_page.getActiveIndicator(0).then(function(value) { 
			expect(value).toMatch(activeIndicatorClass);});
		});
	});
	
	it('should add new slide', function() {
		var quantityBeforeAdding = carousel_page.getAllIndicatorsLength();
		carousel_page.addSlideClick();
		expect(quantityBeforeAdding).toBeLessThan(carousel_page.getAllIndicatorsLength());
	});
	
	it('should leave active slide on the same position when adding a new one', function() {
		carousel_page.clickOnIndicator(0);
		carousel_page.addSlideClick();
		carousel_page.getActiveIndicator(0).then(function(value) { 
			expect(value).toMatch(activeIndicatorClass);});
	});
	
	it('should check same position of active slide and indicator', function() {
		carousel_page.clickOnIndicator(0);
		carousel_page.getActiveSlide(0).then(function(value) { 
			expect(value).toMatch(activeSlideClass);});
		carousel_page.clickOnIndicator(1);
		carousel_page.getActiveSlide(1).then(function(value) { 
			expect(value).toMatch(activeSlideClass);});
		carousel_page.clickOnIndicator(2);
		carousel_page.getActiveSlide(2).then(function(value) { 
			expect(value).toMatch(activeSlideClass);});
	});
	
	it('should active first slide at start', function() {
		carousel_page.getActiveSlide(0).then(function(value) { 
			expect(value).toMatch(activeSlideClass);});
	});
	
	
});