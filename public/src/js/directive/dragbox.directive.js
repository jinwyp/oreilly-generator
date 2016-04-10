

(function() {
    'use strict';


    /* Directives */

    /* recommended */
    /* demo14.directive.js */

    /**
     * @desc order directive that is specific to the order module at a company named Acme
     * @example <div my-nav-bar></div>
     */


    angular.module('websiteApp').directive('dragbox', dragBox);
    dragBox.$inject = ['$document', '$interval'];

    function dragBox($document) {

        var directive = {
            restrict: 'A',

            link: linkFunc
        };

        return directive;


        function linkFunc (scope, element, attr) {
            var startX = 0, startY = 0, x = 0, y = 0, limitleft = 0, limitright = 0;
            var width = 0, height = 0;

            x = Number(attr.left);
            y = Number(attr.top);
            limitleft = Number(attr.limitleft);
            limitright = Number(attr.limitright);

            width = Number(attr.maxwidth);

            element.css({
                position: 'relative',
                // border: '1px solid red',
                // backgroundColor: 'lightgrey'
            });



            element.on('mousedown', function(event) {
                // Prevent default dragging of selected content
                event.preventDefault();
                console.log(event.pageX, event.pageY);
                // console.log(element.offset().left, element.offset().top, element.offset().bottom);
                // console.log(element.position().left, element.position().top, element.position().bottom);
                startX = event.pageX - x;
                startY = event.pageY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);

            });

            function mousemove(event) {
                y = event.pageY - startY;
                x = event.pageX - startX;

                console.log(event.pageX, event.pageY, x, y);
                if (x < limitleft) x = limitleft;
                if (x > limitright) x = limitright;

                element.css({
                    top: y + 'px',
                    left:  x + 'px'
                });
            }

            function mouseup() {
                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
            }


            element.on('mousewheel', mousescroll);
            function mousescroll(evt) {
                evt.preventDefault();
            //    console.log(evt.offsetX + ':' + evt.offsetY, evt.originalEvent.wheelDelta);

                if (evt.originalEvent.wheelDelta > 0) {
                    width++;
                } else {
                    width--;
                }

                element.find('img').css({
                    maxWidth: width + 'px'
                });

            }
        }
    }


})();
