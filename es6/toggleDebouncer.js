class ToggleDebouncer extends SVGClassToggler {
  constructor( toggleClass, targetClass ){
    super( toggleClass, targetClass );
    this.timer;
  }
  addClassSVG(){
    super.addClassSVG();
    this.isActive = true;
    this.checkIfActiveIn(2000).then( (id)=> this.checkIfShouldDeactivate(id) );
  }
  removeClassSVG(){
    super.removeClassSVG();
    this.isActive = false;
  }
  checkIfShouldDeactivate(id){
    if(this.timer === id){
      this.removeClassSVG();
      this.timer = undefined;
    } 
  }
  checkIfActiveIn( ms ){
    var newTimer,
    promise = new Promise(
      function( resolve ) {
        newTimer = setTimeout( function(){
          resolve( newTimer );              
        }, ms );
      }
    );
    this.timer = newTimer;
    return promise;
  }
}