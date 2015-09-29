describe('toggleDebouncer.js', function(){
  beforeEach(function(){
		fixture.load('fixture.html');  
		var test = new ToggleDebouncer();
  })
  afterEach(function(){
  	fixture.cleanup();
  	
  })
	describe('when clicking a trigger', function(){
		describe('and it is not active', function(){
			beforeEach(function(){
				$('.js-toggle-trigger').click();				
			})
			it('should add the active class to the element', function(){
				expect( $('.js-toggle-target') ).to.have.class('active')
			});
			it('after 1.5s should retain the active class on the element', function(done){
			  this.timeout(1600); 
			  setTimeout(function() {
					expect( $('.js-toggle-target') ).to.have.class('active')
			    done(); // <------
			  }, 1500);
			});
			it('after 1.5s click should remove the active class on the element', function(done){
			  this.timeout(1600); 
				  setTimeout(function() {
				  	$('.js-toggle-trigger').click()
						expect( $('.js-toggle-target') ).not.to.have.class('active')
				    done(); // <------
				  }, 1500);
			});	
			it('after 1.5s double click add the active class on the element', function(done){
			  this.timeout(3700); 
				  setTimeout(function() {
				  	$('.js-toggle-trigger').click()
				  	$('.js-toggle-trigger').click()
						expect( $('.js-toggle-target') ).to.have.class('active')
				  }, 1500);
					setTimeout(function(){
						expect( $('.js-toggle-target') ).to.have.class('active')						
					}, 2000)	
					setTimeout(function(){
						expect( $('.js-toggle-target') ).not.to.have.class('active')
				    done(); // <------												
					}, 3600)				  
			});													
			it('after 2s should automatically remove the active class from the element', function(){
				  this.timeout(2100); 
				  setTimeout(function() {
						expect( $('.js-toggle-target') ).not.to.have.class('active')
				    done(); // <------
				  }, 2000);				
			});		
		});
	})
})