import CSSTransition from 'helpers/js/css-transition';

const MAX_INCREASE_PER_MS = 1 / 1000;

class ProgressRingDeterminate {
  constructor(el) {
    this.startTime = undefined;
    this.el = el;
    this.el.classList.add('hig__progress-ring--determinate');
    this.value = 0;
    this.prevTimestamp = 0;

    this.initSegments();

    this.containerAnimation = new CSSTransition({
      el: this.el,
      class: 'hig__progress-ring',
      enteringDuration: 650,
      exitingDuration: 466,
    });
  }

  initSegments() {
    this.segments = this.el.querySelectorAll('.hig__progress-ring__segment');
    this.SEGMENT_COUNT = this.segments.length;
    this.FADE_DELAY_FACTOR = 1 / this.SEGMENT_COUNT;
  }

  setProgress(percent) {
    this.targetValue = percent / 100;

    if (!this.prevTimestamp) {
      this.prevTimestamp = performance.now();
    }
    window.requestAnimationFrame(this.step);
  }

  step = (timestamp) => {
    if (this.containerAnimation.isEntering() || this.containerAnimation.isExiting()) {
      this.wait();
      return;
    }

    if (this.containerAnimation.isExited() && this.value !== this.targetValue) {
      this.enter();
      return;
    }

    if (this.targetValue === 1 && this.value === 1) {
      this.exit();
      return;
    }

    this.progressTowardTarget(timestamp);
  }

  wait() {
    this.prevTimestamp = performance.now();
    window.requestAnimationFrame(this.step);
  }

  enter() {
    this.segments.forEach((segment) => { segment.style.opacity = 0; });
    this.containerAnimation.enter();
    this.wait();
  }

  exit() {
    this.segments.forEach((segment) => { segment.style.opacity = null; });
    this.containerAnimation.exit();
    this.wait();
  }

  progressTowardTarget(timestamp) {
    const elapsed = timestamp - this.prevTimestamp;

    let valueDiff;
    if (this.targetValue > this.value) {
      valueDiff = Math.min(elapsed * MAX_INCREASE_PER_MS, this.targetValue - this.value);
    } else if (this.targetValue < this.value) {
      valueDiff = Math.max(-elapsed * MAX_INCREASE_PER_MS, this.targetValue - this.value);
    } else {
      this.prevTimestamp = undefined;
      return;
    }

    const interrumValue = this.value + valueDiff;

    this.setSegmentOpacities(interrumValue);

    this.prevTimestamp = timestamp;
    this.value = interrumValue;

    window.requestAnimationFrame(this.step);
  }

  setSegmentOpacities(value) {
    this.segments.forEach((segment, i) => {
      const index = Math.abs(i - this.SEGMENT_COUNT) - 1;
      segment.style.opacity = this.opacityForSegment(index, value);
    });
  }

  opacityForSegment(index, value) {
    const fadeStartValue = index * this.FADE_DELAY_FACTOR;
    return (value - fadeStartValue) / this.FADE_DELAY_FACTOR;
  }

  start() {
    this.enter();
  }

  stop() {
    this.prevTimestamp = undefined;
    window.cancelAnimationFrame(this.step);
    this.containerAnimation.stop();
  }

  forceReset() {
    this.initSegments();
    this.setSegmentOpacities(this.value);
  }
}

export default ProgressRingDeterminate;
