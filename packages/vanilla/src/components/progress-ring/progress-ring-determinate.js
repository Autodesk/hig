const MAX_INCREASE_PER_MS = 1 / 1000;

class ProgressRingDeterminate {
  constructor(el) {
    this.startTime = undefined;
    this.el = el;
    this.el.classList.add('hig__progress-ring--determinate');
    this.segments = this.el.querySelectorAll('.segment');
    this.value = 0;
    this.prevTimestamp = 0;

    this.SEGMENT_COUNT = this.segments.length;
    this.FADE_DELAY_FACTOR = 1 / this.SEGMENT_COUNT;

    this.segments.forEach((segment) => {
      segment.style.opacity = 0;
    });
  }

  setProgress(percent) {
    this.targetValue = percent / 100;

    this.prevTimestamp = performance.now();
    window.requestAnimationFrame(this.step);
  }

  step = (timestamp) => {
    const elapsed = timestamp - this.prevTimestamp;
    let valueDiff;
    if (this.targetValue > this.value) {
      valueDiff = Math.min(elapsed * MAX_INCREASE_PER_MS, this.targetValue - this.value);
    } else if (this.targetValue < this.value) {
      valueDiff = Math.max(-elapsed * MAX_INCREASE_PER_MS, this.targetValue - this.value);
    } else {
      return;
    }

    const interrumValue = this.value + valueDiff;

    this.segments.forEach((segment, i) => {
      const index = Math.abs(i - this.SEGMENT_COUNT) - 1;
      segment.style.opacity = this.opacityForSegment(index, interrumValue);
    });

    this.prevTimestamp = timestamp;
    this.value = interrumValue;

    window.requestAnimationFrame(this.step);
  }

  opacityForSegment(index, value) {
    const fadeStartValue = index * this.FADE_DELAY_FACTOR;
    return (value - fadeStartValue) / this.FADE_DELAY_FACTOR;
  }

  start() {}

  stop() {
    window.cancelAnimationFrame(this.step);
  }
}

module.exports = ProgressRingDeterminate;
