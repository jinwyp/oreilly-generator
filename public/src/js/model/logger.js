
(function() {
  'use strict';


  /* Services Model */


// Demonstrate how to register services
// In this case it is a simple value service.

  angular.module('websiteApp').factory('Logger', loggerService);

  loggerService.$inject = ['$log'];

  function loggerService($log) {
      return {
          debug: debug,
          errorXHR: errorXHR
      };

      function errorXHR(err) {
          $log.error('XHR Failed. ' );
          $log.debug(err.data );
      }

      function debug(info) {
          $log.debug('Debug Info : ' + info );
          return info;
      }

  }
})();
