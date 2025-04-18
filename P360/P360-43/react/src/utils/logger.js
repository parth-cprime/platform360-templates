// This file contains the logger utility that will handle all application logging

export function logError(err) {
  console.error(err);
}

export function logInfo(message) {
  console.log(message);
}

export function logWarning(message) {
  console.warn(message);
}