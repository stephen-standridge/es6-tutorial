console.log('test')
var SVGClassToggler = function( triggerClass, targetClass ){
	var triggerClass = triggerClass || 'js-toggle-trigger';
	var targetClass = targetClass || 'js-toggle-target';
	this.isActive = false;
	this.trigger = $(triggerClass);
	this.target = $(targetClass);
	this.klass = 'active';
};
SVGClassToggler.prototype = {
	bindClicks: function(){
		var self = this;
		$(this.trigger).click(function(e){
			e.preventDefault();
			self.toggleClass();
		});
	},
	addClassSVG: function(){
		var $el = $(this.target);		
    if($el.length > 0){
      this.addMultipleClasses($el);
    } else {
      this.addSingularClass($el);
    }
  },  
	removeClassSVG: function(){
		var $el = $(this.target);
    if($el.length > 0){
      this.removeMultipleClasses($el);
    } else {
      this.removeSingularClass($el);
    }
    this.isActive = false;
	},
	toggleClass: function(){
		if( this.isActive ){
			this.removeClassSVG();					
			return;
		}
		this.addClassSVG();		
	},
  removeSingularClass: function(elem){
    var tempClass = $(elem).attr('class');
    var newClass  = tempClass.replace(' '+this.klass, '');
    $(elem).attr('class', newClass);
  },
  removeMultipleClasses: function(elems){
    var tempClass, newClass, self=this;
    $(elems).each(function(){
    	self.removeSingularClass( $(this) );
    });
  },
  addSingularClass: function(elem){
    var tempClass = $(elem).attr('class');
    $(elem).attr('class', tempClass + ' ' +this.klass);
  },
  addMultipleClasses: function(elems){
    var tempClass, self=this;
    $( elems ).each( function(){
    	self.addSingularClass( $(this) );
    });
  }	
};
var ToggleDebouncer = function( trigger, target, klass ){
	SVGClassToggler.apply(this ,[trigger, target, klass]);
	this.timeout;
	this.bindClicks();
	this.addClassSVG= function(){
		console.log('yes')
	  this.isActive = true;    
		this.debounce( this.checkIfShouldDeactivate, 2000, this);	  		
		var backup = this.addClassSVG;
	  delete this.addClassSVG;//delete instance property
	  this.addClassSVG();//call again
	  //but now, the instance property is missing, JS will use the prototype	
	  this.addClassSVG = backup;//restore instance property	  
	};
	this.removeClassSVG= function(){
		console.log('deactivated')
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
	this.debounce= function(func, wait, context) {
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

