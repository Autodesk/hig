import { Info24, Complete24, Error24, Issue24 } from "@hig/icons";

export const STATUS_ICONS = Object.freeze({
  primary: Info24,
  success: Complete24,
  error: Error24,
  warning: Issue24
});

export const AVAILABLE_STATUSES = Object.freeze(Object.keys(STATUS_ICONS));
