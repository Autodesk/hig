class CSSTransition {

  constructor(el, transitionClass) {
    this.el = el
    this.enteringClass = `${transitionClass}--entering`;
    this.enteredClass = `${transitionClass}--entered`;
    this.exitingClass = `${transitionClass}--exiting`;
    this.exitedClass = `${transitionClass}--exited`;
    this.animationClasses = [this.enteringClass, this.enteredClass, this.exitingClass, this.exitedClass]
    this.el.classList.add(this.exitedClass);
  }


  enter(){
    this.state = "entering"
    if (this.el.classList.contains(this.enteringClass) || this.el.classList.contains(this.enteredClass)) {
      return;
    }

    this.resetAnimationState();
    this.el.addEventListener("animationend", this.handleEnterComplete)
    this.el.classList.add(this.enteringClass) 
  }

  exit(){
    this.state = "exiting"
    if (this.el.classList.contains(this.exitingClass) || this.el.classList.contains(this.exitedClass)) {
      return;
    }
    
    this.resetAnimationState();
    this.el.addEventListener("animationend", this.handleExitComplete)
    this.el.classList.add(this.exitingClass)
   
  }


  resetAnimationState() { 
    this.el.classList.remove(...this.animationClasses);
    this.el.removeEventListener(
      'animationend',
      this.handleEnterComplete
    );
    this.el.removeEventListener(
      'animationend',
      this.handleExitComplete
    );
  }

  handleEnterComplete = (event) => {
    this.state = "entered"
    this.resetAnimationState();
    this.el.classList.add(this.enteredClass);
   
  }

  handleExitComplete = (event) => {
    this.state = "exited"
    this.resetAnimationState();
    this.el.classList.add(this.exitedClass);
   
  }

  isEntering(){
    return this.state === "entered" || this.state === "entering" ? true : false
  } 
}

module.exports = CSSTransition;