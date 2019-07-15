import {
  Info16,
  Info24,
  Complete16,
  Complete24,
  Error16,
  Error24,
  Alert16,
  Alert24
} from "@hig/icons";

export const STATUS_ICONS = Object.freeze({
  primary: {
    high: Info16,
    medium: Info24
  },
  success: {
    high: Complete16,
    medium: Complete24
  },
  error: {
    high: Error16,
    medium: Error24
  },
  warning: {
    high: Alert16,
    medium: Alert24
  }
});

export const AVAILABLE_STATUSES = Object.freeze(Object.keys(STATUS_ICONS));
