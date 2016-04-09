
(function() {
  'use strict';


  /* Services Model */


// Demonstrate how to register services
// In this case it is a simple value service.

  angular.module('websiteApp').factory('User', userService);

  userService.$inject = ['$http', '$localStorage'];

  function userService($http, $localStorage) {
      return {
          login: login,
          logout: logout,
          getSMS: getSMS,
          signup: signup,
      };

      function login(user) {
          return $http.post('/api/user/login', user).then(getUserLogin);
            //   .catch(Logger.errorXHR);

          function getUserLogin(response) {
              if (response.data && response.data.accessToken) {
                    $localStorage.access_token = response.data.accessToken;
                }

              return response.data;
          }
      }

      function logout() {
          var token = $localStorage.access_token || '';
          return $http.post('/api/user/logout', {accessToken:token});
      }

      function getSMS(mobile, messageType) {
          messageType = messageType || 'signup';
          return $http.post('/api/user/verify/sms', {mobile : mobile, messageType:messageType});
      }

      function signup(user) {
          return $http.post('/api/user/signup', {
              email    : user.email || '',
              mobile   : user.mobile || '',
              smscode  : user.smscode || '',
              username : user.username,
              password : user.password
          });
      }
  }
})();
