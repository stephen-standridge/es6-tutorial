var SVGClassToggler = function( triggerClass, targetClass ){
	var triggerClass = triggerClass || 'js-toggle-trigger';
	var targetClass = targetClass || 'js-toggle-target';
	this.isActive = false;
	this.trigger = $(triggerClass);
	this.target = $(targetClass);
	this.klass = 'active';
  this.bindClicks();  
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