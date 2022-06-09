import { isDate, isEmpty as lodashIsEmpty, omitBy, trim } from "lodash";

export function isNumber(value: any): value is number {
  return typeof value === "number";
}

export function isEmpty(value: any): boolean {
  if (isBoolean(value) || isNumber(value) || isDate(value)) {
    return false;
  }

  return lodashIsEmpty(value);
}

export function isBoolean(value: any): value is boolean {
  return value === true || value === false;
}
