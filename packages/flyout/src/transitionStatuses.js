import {
  ENTERED,
  ENTERING,
  EXITED,
  EXITING,
} from "react-transition-group/Transition";

const HIDDEN = "hidden";

export const transitionStatuses = Object.freeze({
  ENTERED,
  ENTERING,
  EXITED,
  EXITING,
  HIDDEN,
});

export const AVAILABLE_TRANSITION_STATUSES = Object.freeze(
  Object.values(transitionStatuses)
);
