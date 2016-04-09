

(function() {
    'use strict';


    /* Directives */

    /* recommended */
    /* demo14.directive.js */

    /**
     * @desc order directive that is specific to the order module at a company named Acme
     * @example <div my-nav-bar></div>
     */


    angular.module('websiteApp').directive('myNavBar', [myNavBarComponent]);


    function myNavBarComponent() {

        var directive = {
            restrict: 'EA',
            templateUrl: '/angulardemo/js/component/demo/demo14_tpl.html',
            scope: {
                menulist : '='
            },

            link: linkFunc
        };

        return directive;


        function linkFunc (scope, element, attrs) {
            scope.css = {
                currentEditMenuIndex : -1,
                currentSelectMenuIndex : -1,
                currentHoverMenuIndex : -1,
                showAddNewMenuForm : false
            };
            scope.data = {
                newMenu : {
                    id : scope.menulist[scope.menulist.length-1].id + 1,
                    name : ''
                }
            };


            scope.addMenu = function(){
                scope.css.showAddNewMenuForm = true;
            };
            scope.saveNewMenu = function(){
                scope.data.newMenu.id =scope.menulist[scope.menulist.length-1].id + 1;
                scope.menulist.push(angular.copy(scope.data.newMenu));
                scope.css.showAddNewMenuForm = false;
            };


            scope.editMenu = function(index){
                scope.css.currentEditMenuIndex = index;

            };
            scope.saveEditMenu = function(){
                scope.css.currentEditMenuIndex = -1;
            };


            scope.deleteMenu = function(index){

                scope.menulist.splice(index, 1);
                scope.css.currentEditMenuIndex = -1;

            };
            scope.deleteMenu2 = function(menu){

                for(var i = scope.menulist.length-1; i >= 0; i--){
                    if (scope.menulist[i].id === menu.id) {
                        scope.menulist.splice(i, 1);
                        break;
                    }
                }

                scope.css.currentEditMenuIndex = -1;
            };

        }

    }



})();
