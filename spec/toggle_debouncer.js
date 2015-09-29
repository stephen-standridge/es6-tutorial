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
			it('should add the active class to the element', function(){

			});
			describe('after 2s', function(){
				it('should remove the active class from the element', function(){

				});
			});
		});
		describe('and it is active', function(){
			it('should remove the active class', function(){

			})
			describe('after 1s', function(){
				describe('when clicking a trigger', function(){
					it('should add the active class to the element', function(){

					})
					describe('after 1.5s', function(){
						it('should still have the active class', function(){

						})
					})
				})
			})
		});
	})
})