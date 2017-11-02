import svg from './progress-ring-s.svg';

const CYCLE_DURATION = 1000;
const FADE_DURATION = 416;

class ProgressRingIndeterminate {
  constructor(el) {
    this.startTime = undefined;
    this.el = el;
    this.segments = this.el.querySelectorAll('.segment');

    this.SEGMENT_COUNT = this.segments.length;
    this.SEGMENT_DELAY_FACTOR = CYCLE_DURATION / this.SEGMENT_COUNT;

    this.step(1);
    window.requestAnimationFrame(this.step);
  }

  step = (timestamp) => {
    if (!this.startTime) this.startTime = timestamp;
    const elapsed = timestamp - this.startTime;
    const elapsedThisCycle = elapsed % CYCLE_DURATION;

    this.segments.forEach((segment, i) => {
      const index = Math.abs(i - this.SEGMENT_COUNT) - 1;

      segment.style.opacity = this.opacityForSegment(index, elapsedThisCycle);
    });

    window.requestAnimationFrame(this.step);
  }

  opacityForSegment(index, elapsedThisCycle) {
    const segmentFadeStartTime = index * this.SEGMENT_DELAY_FACTOR;

    // Fade continuing from previous cycle
    if (segmentFadeStartTime + FADE_DURATION > CYCLE_DURATION && elapsedThisCycle < FADE_DURATION) {
      return ((((elapsedThisCycle + CYCLE_DURATION) - segmentFadeStartTime) / FADE_DURATION) - 1) * -1;
    }

    // Fade has finished
    if (elapsedThisCycle < segmentFadeStartTime || elapsedThisCycle > segmentFadeStartTime + FADE_DURATION) {
      return 0;
    }

    // Fading
    return Math.abs(((elapsedThisCycle - segmentFadeStartTime) / FADE_DURATION) - 1);
  }
}

module.exports = ProgressRingIndeterminate;
