import { isDate, isEmpty as lodashIsEmpty } from "lodash";

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

export function isUndefined(value: any): value is undefined {
  return value === undefined;
}
