

(function() {
    'use strict';


    /* Controllers */

    angular.module('websiteApp').controller('ogController', ogController);

    ogController.$inject = ['$window', '$document'];

    function ogController($window, $document) {

        /* jshint validthis: true */
        var vm = this;

        /**********  Data Binding For CSS style   **********/
        vm.css = {
            loginFormErrorMessage : 0
        };


        /**********  Data Binding For ViewModel  **********/
        vm.data = {
            colorList : [
                { name:'Web_design_and_authoring', style:'theme_0'},
                { name:'power_user_computing', style:'theme_1'},
                { name:'in_a_nutshell_and_desktop_references', style:'theme_2'},
                { name:'java', style:'theme_3'},
                { name:'linux', style:'theme_4'},
                { name:'macintosh', style:'theme_5'},
                { name:'oracle', style:'theme_6'},
                { name:'perl', style:'theme_7'},
                { name:'security', style:'theme_8'},
                { name:'system_and_network_administration', style:'theme_9'},
                { name:'unix_c_programming', style:'theme_10'},
                { name:'unix_text_procsseing', style:'theme_11'},
                { name:'the_web', style:'theme_12'},
                { name:'windows_programming', style:'theme_13'},
                { name:'windows_nt_system_administration', style:'theme_14'},
                { name:'xml', style:'theme_15'},
                { name:'mobile', style:'theme_16'}

            ],

            currentColor : { name:'Web_design_and_authoring', style:'theme_0'},
            animalList : [
                { name:"Grizzly Bear", style:"animal_1", imageUrl:"./src/css/images/og/01.png"},
                { name:"Cat", style:"animal_2", imageUrl:"./src/css/images/og/02.png"},
                { name:"Coyote", style:"animal_3", imageUrl:"./src/css/images/og/03.png"},
                { name:"Cow", style:"animal_4", imageUrl:"./src/css/images/og/04.png"},
                { name:"Horse", style:"animal_5", imageUrl:"./src/css/images/og/05.png"},
                { name:"Deer", style:"animal_6", imageUrl:"./src/css/images/og/06.png"},
                { name:"Baboon", style:"animal_7", imageUrl:"./src/css/images/og/07.png"},
                { name:"Wombat", style:"animal_8", imageUrl:"./src/css/images/og/08.png"},
                { name:"Duckbill", style:"animal_9", imageUrl:"./src/css/images/og/09.png"},
                { name:"Bat", style:"animal_10", imageUrl:"./src/css/images/og/10.png"},
                { name:"Pelican", style:"animal_11", imageUrl:"./src/css/images/og/11.png"},
                { name:"Shoebill", style:"animal_12", imageUrl:"./src/css/images/og/12.png"},
                { name:"Raven", style:"animal_13", imageUrl:"./src/css/images/og/13.png"},
                { name:"Wrybill", style:"animal_14", imageUrl:"./src/css/images/og/14.png"},
                { name:"Ostrich", style:"animal_15", imageUrl:"./src/css/images/og/15.png"},
                { name:"Chameleon", style:"animal_16", imageUrl:"./src/css/images/og/16.png"},
                { name:"Rrog", style:"animal_17", imageUrl:"./src/css/images/og/17.png"},
                { name:"Axolotl", style:"animal_18", imageUrl:"./src/css/images/og/18.png"},
                { name:"Snake", style:"animal_19", imageUrl:"./src/css/images/og/19.png"},
                { name:"Leopard Gecko", style:"animal_20", imageUrl:"./src/css/images/og/20.png"},
                { name:"Silurus", style:"animal_21", imageUrl:"./src/css/images/og/21.png"},
                { name:"John Dory", style:"animal_22", imageUrl:"./src/css/images/og/22.png"},
                { name:"Histrio", style:"animal_23", imageUrl:"./src/css/images/og/23.png"},
                { name:"Lamprey", style:"animal_24", imageUrl:"./src/css/images/og/24.png"},
                { name:"Sunfish", style:"animal_25", imageUrl:"./src/css/images/og/25.png"},
                { name:"Butterfly", style:"animal_26", imageUrl:"./src/css/images/og/26.png"},
                { name:"Moth", style:"animal_27", imageUrl:"./src/css/images/og/27.png"},
                { name:"Drgnfly", style:"animal_281", imageUrl:"./src/css/images/og/28.png"},
                { name:"Flea", style:"animal_29", imageUrl:"./src/css/images/og/29.png"},
                { name:"Stinkbug", style:"animal_30", imageUrl:"./src/css/images/og/30.png"},
                { name:"Spider", style:"animal_31", imageUrl:"./src/css/images/og/31.png"},
                { name:"Scorpion", style:"animal_32", imageUrl:"./src/css/images/og/32.png"},
                { name:"Crab", style:"animal_33", imageUrl:"./src/css/images/og/33.png"},
                { name:"Lobster", style:"animal_34", imageUrl:"./src/css/images/og/34.png"},
                { name:"King Crab", style:"animal_35", imageUrl:"./src/css/images/og/35.png"},
                { name:"Earshell", style:"animal_36", imageUrl:"./src/css/images/og/36.png"},
                { name:"Sea Cucumber", style:"animal_37", imageUrl:"./src/css/images/og/37.png"},
                { name:"Jellyfish", style:"animal_38", imageUrl:"./src/css/images/og/38.png"},
                { name:"Astraea", style:"animal_39", imageUrl:"./src/css/images/og/39.png"},
                { name:"Mushroom", style:"animal_40", imageUrl:"./src/css/images/og/40.png"},
            ],
            currentAnimal : { name:'Cow', style:"animal_4", imageUrl:"./src/css/images/og/04.png"}
        };


        /**********  Event Center  **********/
        vm.event = {
            clickColor: clickColor,
            clickAnimal: clickAnimal,
            screenShot: screenShot
        };


        function clickColor(color){
            console.log(color);
            vm.data.currentColor = color;
        }

        function clickAnimal(animal){
            console.log(animal);
            vm.data.currentAnimal = animal;
        }

        function screenShot(){
            var myElement = $('.book_cover');
            html2canvas(myElement, {
                onrendered: function(canvas) {
                    var myImage = canvas.toDataURL("image/png");
                    window.open(myImage);

                    // document.body.appendChild(canvas);
                }
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
