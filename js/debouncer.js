'use strict';
var Toggle = function( trigger, target, reset='false', klass = 'active' ){
	this.isActive = false;
	this.trigger = $(trigger);
	this.target = $(target);
	this.klass = klass;
	this.reset = reset;
	self.timer;
	this.bindClicks();
};
Toggle.prototype = {
	bindClicks: function(){
		var self = this;
		$(this.trigger).click(function(e){
			e.preventDefault();
			self.toggleClass();
		});
	},
	addClassSVG: function(){
		let $el = $(this.target);		
    if($el.length > 0){
      this.addMultipleClasses($el);
    } else {
      this.addSingularClass($el);
    }
    this.isActive = true;
		if( this.reset == true ){
	    var self = this;
	    this.wait().then(function(id){
				if(self.timer === id){
					self.removeClassSVG();
				}
	    }).catch(function(){
	    	console.log('not active')
	    });
	   }
  },
	removeClassSVG: function(){
		let $el = $(this.target);
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
	wait: function(){
		var self = this;
		return new Promise(
			function(resolve, reject) {
				var timer = setTimeout( function(){
					if( self.isActive ){
						resolve( timer );							
					} else {
						reject();
					}
				}, 2000 );
				self.timer = timer;
			}
		);
	},
  removeSingularClass: function(elem){
    var tempClass = $(elem).attr('class');
    var newClass  = tempClass.replace(' '+this.klass, '');
    $(elem).attr('class', newClass);
  },
  removeMultipleClasses: function(elems){
    var tempClass, newClass;
    for(var i = 0; i< elems.length; i++){
      tempClass = $(elems[i]).attr('class');
      newClass  = tempClass.replace(' '+this.klass, '');
      $(elems[i]).attr('class', newClass);
    }
  },
  addSingularClass: function(elem){
    var tempClass = $(elem).attr('class');
    $(elem).attr('class', tempClass + ' ' +this.klass);
  },
  addMultipleClasses: function(elems){
    var tempClass;
    for(var i = 0; i< elems.length; i++){
      tempClass = $(elems[i]).attr('class');
      $(elems[i]).attr('class', tempClass + ' ' +this.klass);
    }
  }
};
var toggleable = new Toggle('.js-guide-button', '.logo-guide')
var toggleable2 = new Toggle('.js-animate-button', '.js-animated', true)