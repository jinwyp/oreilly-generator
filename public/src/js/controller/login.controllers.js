

(function() {
    'use strict';


    /* Controllers */

    angular.module('websiteApp').controller('loginController', loginController);

    loginController.$inject = ['$window', '$interval', 'Logger', 'User'];

    function loginController($window, $interval, Logger, User) {

        /* jshint validthis: true */
        var vm = this;

        /**********  Data Binding For CSS style   **********/
        vm.css = {
            loginFormErrorMessage : 0,
            signupType : 'mobile',
            signupFirstTime : true,
            signupSMSCountDown : 60,
            signupSMSSendButton : true
        };


        /**********  Data Binding For ViewModel  **********/
        vm.data = {
            newUser : {
                username : '',
                password : ''
            },

            signupUser : {
                email : '',
                mobile : '',
                smscode : '',
                username : '',
                password : ''
            }
        };


        /**********  Event Center  **********/
        vm.event = {
            login : login,
            logout : logout,
            changeSignupType : changeSignupType,
            getSignupSMS : getSignupSMS,
            signupSMS : signupSMS
        };


        function login(form){

            if (form.$invalid) {
                form.username.$setDirty();
                form.password.$setDirty();
                return ;
            }

            User.login(vm.data.newUser).then(function(data){
                console.log(data);
                $window.location.href = '/';
            }).catch(function(err){
                if (err && err.data && err.data.code){
                    vm.css.loginFormErrorMessage = err.data.code;
                }
                Logger.errorXHR(err);
            });
        }


        function logout(){

            User.logout().then(function(data){
                console.log(data);
                $window.location.href = '/';
            }).catch(function(err){
                Logger.errorXHR(err);
            });

        }


        function changeSignupType(type){
            vm.css.signupType = type ;
        }


        function getSignupSMS(form){

            if (form.mobile.$invalid) {
                form.mobile.$setDirty();
                return ;
            }

            vm.css.signupFirstTime = false;
            vm.css.signupSMSSendButton = false;

            var timer = $interval(function () {
                vm.css.signupSMSCountDown = vm.css.signupSMSCountDown - 1;
                if (vm.css.signupSMSCountDown <=0) {
                    $interval.cancel(timer);
                    vm.css.signupSMSCountDown = 60;
                    vm.css.signupSMSSendButton = true;
                }
            }, 1000);

            User.getSMS(vm.data.signupUser.mobile, 'signup').then(function(data){
                console.log(data.data);
            }).catch(function(err){
                Logger.errorXHR(err);
            });
        }


        function signupSMS(form){

            if (form.$invalid) {
                form.smscode.$setDirty();
                form.username.$setDirty();
                form.password.$setDirty();
                return ;
            }

            User.signup(vm.data.signupUser).then(function(data){
                console.log(data);
            }).catch(function(err){
                if (err && err.data && err.data.code){
                    vm.css.loginFormErrorMessage = err.data.code;
                }
                Logger.errorXHR(err);
            });
        }



        /**********  App Init  **********/

        function appInit (){

        }

        function appReRun(){

        }

        appInit();

    }



})();
