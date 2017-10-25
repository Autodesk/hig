class CSSTransition {

  constructor(el, definingClass) {
    this.el = el
    this.definingClass = definingClass
    this.enteringClass = `${definingClass}--entering`;
    this.enteredClass = `${definingClass}--entered`;
    this.exitingClass = `${definingClass}--exiting`;
    this.exitedClass = `${definingClass}--exited`;
    this.animationClasses = [this.enteringClass, this.enteredClass, this.exitingClass, this.exitedClass]
  }


  enter(){
    if (this.el.classList.contains(this.enteringClass) || this.el.classList.contains(this.enteredClass)) {
      return;
    }
    this.resetAnimationState();

    this.el.addEventListener("animationend", this.handleEnterComplete)
    this.el.classList.add(this.enteringClass) 
  }

  exit(){
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
    this.resetAnimationState();
    this.el.classList.add(this.enteredClass);
  }

  handleExitComplete = (event) => {
    this.resetAnimationState();
    this.el.classList.add(this.exitedClass);
  }
}

module.exports = CSSTransition;