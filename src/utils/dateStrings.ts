import monthNames from "../constants/monthNames"

export function getMonthAndYearString(date: Date): string {
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`
};

export function getFullDateString(date: Date): string {
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
};