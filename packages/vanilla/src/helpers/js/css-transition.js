class CSSTransition {
  constructor(options) {
    this.el = options.el;
    this.enteringDuration = options.enteringDuration;
    this.exitingDuration = options.exitingDuration;
    this.enteringClass = `${options.class}--entering`;
    this.enteredClass = `${options.class}--entered`;
    this.exitingClass = `${options.class}--exiting`;
    this.exitedClass = `${options.class}--exited`;
    this.animationClasses = [
      this.enteringClass, this.enteredClass, this.exitingClass, this.exitedClass
    ];

    this.state = 'exited';
    this.el.classList.add(this.exitedClass);
  }

  enter() {
    this.state = 'entering';
    if (this.el.classList.contains(this.enteringClass)
        || this.el.classList.contains(this.enteredClass)) {
      return;
    }

    this.clearState();
    this.enteringTimout = setTimeout(this.handleEnterComplete, this.enteringDuration);
    this.el.classList.add(this.enteringClass);
  }

  exit() {
    this.state = 'exiting';
    if (this.el.classList.contains(this.exitingClass)
        || this.el.classList.contains(this.exitedClass)) {
      return;
    }

    this.clearState();
    this.exitingTimout = setTimeout(this.handleExitComplete, this.exitingDuration);
    this.el.classList.add(this.exitingClass);
  }


  clearState() {
    this.el.classList.remove(...this.animationClasses);
  }

  handleEnterComplete = () => {
    this.state = 'entered';
    this.clearState();
    this.el.classList.add(this.enteredClass);
  }

  handleExitComplete = () => {
    this.state = 'exited';
    this.clearState();
    this.el.classList.add(this.exitedClass);
  }

  isEntering() {
    return this.state === 'entering';
  }

  isEntered() {
    return this.state === 'entered';
  }

  isExiting() {
    return this.state === 'exiting';
  }

  isExited() {
    return this.state === 'exited';
  }

  stop() {
    clearTimeout(this.enteringTimeout);
    clearTimeout(this.exitingTimeout);
    this.clearState();
  }
}

module.exports = CSSTransition;
