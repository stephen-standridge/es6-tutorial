class ToggleDebouncer extends SVGClassToggler {
  constructor( toggleClass, targetClass ){
    super( toggleClass, targetClass );
    this.timerId;
  }
  addClassSVG(){
    super.addClassSVG();
    this.isActive = true;
    this.wait(2000).then( (id)=> this.checkIfShouldDeactivate(id) );
  }
  removeClassSVG(){
    super.removeClassSVG();
    this.isActive = false;
  }
  checkIfShouldDeactivate(id){
    if(this.timerId === id){
      this.removeClassSVG();
      this.timerId = undefined;
    } 
  }
  wait( ms ){
    var newTimer,
    promise = new Promise( function( resolve ) {
      newTimer = setTimeout( function(){
        resolve( newTimer );              
      }, ms );
    } );
    this.timerId = newTimer;
    return promise;
  }
}