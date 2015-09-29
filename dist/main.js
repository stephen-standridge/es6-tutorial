var ToggleDebouncer = function( trigger, target, klass ){
	var triggerClass = trigger || '.js-toggle-trigger';
	var targetClass = target || '.js-toggle-target';
	this.isActive = false;
	this.trigger = $(triggerClass);
	this.target = $(targetClass);
	this.klass = klass || 'active';
	this.timeout;
	this.bindClicks();
};
ToggleDebouncer.prototype = {
	bindClicks: function(){
		var self = this;
		$(this.trigger).click(function(e){
			e.preventDefault();
			self.toggleClass();
		});
	},
	addClassSVG: function(){
		var $el = $(this.target);		
    if($el.length > 1){
      this.addMultipleClasses($el);
    } else {
      this.addSingularClass($el);
    }
    this.isActive = true;    
		this.debounce( this.removeClassSVG, 2000, this);
  },  
	removeClassSVG: function(){
		var $el = $(this.target);
    if($el.length > 1){
      this.removeMultipleClasses($el);
    } else {
      this.removeSingularClass($el);
    }
    this.isActive = false;
	},

	debounce: function(func, wait, context) {
		var debounced = function() {
			var later = function() {
				func.apply(context);
				this.timerId = undefined;				
			};
			clearTimeout(this.timerId);
			this.timerId = setTimeout(later, wait);
		}();
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
    })
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