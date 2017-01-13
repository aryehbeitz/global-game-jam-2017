import { environment } from './../../../environments/environment';
import { Injectable, DebugElement } from '@angular/core';

@Injectable()
export class LoggerService {
  
  constructor(private logLevel = LogLevel.TRACE) { }

  trace(message = '') {
    if (this.logLevel >= LogLevel.TRACE) {
      console.trace(message);
    }
  }
  debug(message = '') {
    if (this.logLevel >= LogLevel.DEBUG) {
      console.debug(message);
    }
  }
  info(message = '') {
    if (this.logLevel >= LogLevel.INFO) {
      console.info(message);
    }
  }
  warn(message = '') {
    if (this.logLevel >= LogLevel.WARN) {
      console.warn(message);
    }
  }
  error(message = '') {
    if (this.logLevel >= LogLevel.WARN) {
      console.warn(message);
    }
  }
}

export function loggerServiceFactory() {
  return new LoggerService(environment.logLevel);
}

export enum LogLevel {
  NONE,
  ERROR,
  WARN,
  INFO,
  DEBUG,
  TRACE
}
