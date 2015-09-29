class SVGClassToggler {
	constructor( trigger = '.js-toggle-trigger', target  = '.js-toggle-target'){
		this.isActive = false;
		this.trigger = $(trigger);
		this.target = $(target);
		this.klass = 'active';
    this.bindClicks();    
  }
	bindClicks(){
		$(this.trigger).click( (e) => {
			e.preventDefault();
			this.toggleClass();
		});
	}
	addClassSVG(){
		let $el = $(this.target);		
    if($el.length > 1){
      this.addMultipleClasses($el);
    } else {
      this.addSingularClass($el);
    }
  }
	removeClassSVG(){
		let $el = $(this.target);
    if($el.length > 1){
      this.removeMultipleClasses($el);
    } else {
      this.removeSingularClass($el);
    }
	}
  removeSingularClass(elem){
    let tempClass = $(elem).attr('class');
    let newClass  = tempClass.replace(' '+this.klass, '');
    $(elem).attr('class', newClass);
  }
  removeMultipleClasses(elems){
    var self=this;
    $(elems).each(function(){
      self.removeSingularClass( $(this) );
    });
  }
  addSingularClass(elem){
    let tempClass = $(elem).attr('class');
    $(elem).attr('class', tempClass + ' ' +this.klass);
  }
  addMultipleClasses(elems){
    var self=this;
    $( elems ).each( function(){
      self.addSingularClass( $(this) );
    });
  }
	toggleClass(){
		if( this.isActive ){
			this.removeClassSVG();					
			return;
		}
		this.addClassSVG();		
	}	  
}