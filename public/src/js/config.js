
(function() {
    'use strict';

    angular.module('websiteApp').value('version', '0.1');


    angular.module('websiteApp').factory('commonInterceptor', commonInterceptorService);

    commonInterceptorService.$inject = ['$q', '$location', '$localStorage'];

    function commonInterceptorService($q, $location, $localStorage) {
        return {
            request: request,
            responseError: responseError
        };


        function request(config) {
            if ($localStorage.access_token) {
                config.headers['X-Access-Token'] = 'Bearer ' + $localStorage.access_token;
            }
            return config;
        }

        function responseError(response) {

            if (response.status == 401) {
                // $location.url('/web/signin');
            }

            if (response.status == 403) {
                // $location.url('/web/signin');
            }

            return $q.reject(response);
        }

    }





    angular.module('websiteApp').config(['$httpProvider', '$compileProvider', function($httpProvider, $compileProvider) {
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

        $httpProvider.defaults.headers.common.Accept = 'application/json, text/javascript';
        // $httpProvider.defaults.headers.common['Accept-Charset'] = 'charset=utf-8';
        // $httpProvider.defaults.headers.common['Accept-Language'] = 'zh-CN' ? 'zh-CN' : 'en-US';
        // $httpProvider.defaults.headers.common['Accept-Encoding'] = 'zh-CN' ? 'zh-CN' : 'en-US';


        $httpProvider.interceptors.push('commonInterceptor');

        // disable debug data for performance.
        // https://docs.angularjs.org/guide/production#disabling-debug-data
        $compileProvider.debugInfoEnabled(false);
    }]);


})();
