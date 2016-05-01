define([], function() {
  var __modules = {};
  __modules["utils/1"] = (function() {
    'use strict';
    var str = "I am utils/1";
    return {
      name: "utils/1",
      deps: [],
      privates: [str]
    };
  })();
  __modules["controller/1"] = (function(utils) {
    'use strict';
    return {
      name: "1/controller/1",
      deps: [utils]
    };
  })(__modules["utils/1"]);
  __modules["M2"] = (function(ctrl) {
    'use strict';
    return {
      name: "1/M2",
      deps: [ctrl]
    };
  })(__modules["controller/1"]);
  return __modules["M2"];
});