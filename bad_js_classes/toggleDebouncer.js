var ToggleDebouncer = function( trigger, target, klass ){
	SVGClassToggler.apply(this ,[trigger, target, klass]);
	this.timeout;
	this.addClassSVG= function(){
	  this.isActive = true;    
		this.debounce( this.checkIfShouldDeactivate, 2000, this);	  		
		var backup = this.addClassSVG;
	  delete this.addClassSVG;//delete instance property
	  this.addClassSVG();//call again
	  //but now, the instance property is missing, JS will use the prototype	
	  this.addClassSVG = backup;//restore instance property	  
	};
	this.removeClassSVG= function(){
		var backup = this.removeClassSVG;
	  delete this.removeClassSVG;//delete instance property
	  this.removeClassSVG();//call again
	  //but now, the instance property is missing, JS will use the prototype
	  this.removeClassSVG = backup;//restore instance property	 
 	  this.isActive = false;		
	},
	this.checkIfShouldDeactivate = function(id){
		if(this.timer === id){
			this.removeClassSVG();
		}	
	};
	this.debounce = function(func, wait, context) {
		var timeout;
		var debounced = function() {
			var later = function() {
				func.apply(context, [timeout]);
				timeout = null;				
			};
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		}();
		this.timer = timeout;
		return debounced;
	};	
};
ToggleDebouncer.prototype = SVGClassToggler.prototype;

