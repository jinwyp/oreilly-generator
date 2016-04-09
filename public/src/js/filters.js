
(function() {
  'use strict';



  /* Filters */

  angular.module('websiteApp').filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);


})();
