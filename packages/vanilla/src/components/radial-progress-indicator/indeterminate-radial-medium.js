import svg from './radial-progress-indicator-m.svg';

const SEGMENT_COUNT = 20;
const CYCLE_DURATION = 1000;
const FADE_DURATION = 416;
const SEGMENT_DELAY_FACTOR = CYCLE_DURATION / SEGMENT_COUNT;

class IndeterminateRadialMedium {
  constructor(el) {
    this.start = undefined;
    this.el = el;
    this.el.innerHTML = svg;
    this.segments = this.el.querySelectorAll('polygon');
    window.requestAnimationFrame(this.step);
    this.step(1);
  }

  step = (timestamp) => {
    if (!this.start) this.start = timestamp;
    const elapsed = timestamp - this.start;
    const elapsedThisCycle = elapsed % CYCLE_DURATION;

    this.segments.forEach((segment, i) => {
      const index = Math.abs(i - SEGMENT_COUNT) - 1;
      const segmentFadeStartTime = index * SEGMENT_DELAY_FACTOR;

      if (segmentFadeStartTime + FADE_DURATION > CYCLE_DURATION && elapsedThisCycle < FADE_DURATION) {
        const percentFade = ((((elapsedThisCycle + CYCLE_DURATION) - segmentFadeStartTime) / FADE_DURATION) - 1) * -1;
        segment.style.opacity = percentFade;
        return;
      }

      if (elapsedThisCycle < segmentFadeStartTime || elapsedThisCycle > segmentFadeStartTime + FADE_DURATION) {
        segment.style.opacity = 0;
        return;
      }

      const percentFade = Math.abs(((elapsedThisCycle - segmentFadeStartTime) / FADE_DURATION) - 1);
      segment.style.opacity = percentFade;
    });

    window.requestAnimationFrame(this.step);
  }
}

module.exports = IndeterminateRadialMedium;
