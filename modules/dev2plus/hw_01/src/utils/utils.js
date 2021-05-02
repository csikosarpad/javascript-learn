const utils = {
  stateTime: {
    state: null,
    startTime: null,
    stopTime: null,
    result: null,
    measuringType: null,
  },
  timeMeasure: (state, ...measuringType) => {
    utils.stateTime.state = state;
    utils.stateTime.measuringType =
      measuringType.length > 0 ? measuringType : "not defined";

    switch (state) {
      case "start":
        utils.stateTime.startTime = new Date().getTime();
        break;
      case "stop":
        utils.stateTime.stopTime = new Date().getTime();
        utils.stateTime.result = `The measuring (${
          utils.stateTime.measuringType
        }) time result is: ${
          utils.stateTime.stopTime - utils.stateTime.startTime
        }ms`;
        break;
    }
  },
};

module.exports = utils;
