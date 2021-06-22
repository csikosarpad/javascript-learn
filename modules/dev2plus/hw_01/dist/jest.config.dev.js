"use strict";

module.exports = {
  verbose: true,
  coverageReporters: ["text", "json", "html", "clover"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};