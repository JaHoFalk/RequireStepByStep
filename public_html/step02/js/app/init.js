/* 
 * Define a Module as a Function
 *
 *  You can explicitly name modules yourself, but it 
 *  makes the modules less portable. If you move the 
 *  file to another directory you will need to change the name.
 *  
 * see http://requirejs.org/docs/whyamd.html#sugar
 */

define(function(require, exports, module) {
    /*
     * Strict Mode is a new feature in ECMAScript 5 that 
     * allows you to place a program, or a function, in a 
     * "strict" operating context. This strict context 
     * prevents certain actions from being taken and 
     * throws more exceptions.
     */
    "use strict";

    /*
     * Function is not called until the jquery module have been loaded, 
     * and the function receives the modules as the $ argument.
     */
    var $ = require('jquery');
    var logger = require('app/mocklog');

    /*
     * Modules do not have to return objects. Any valid return value 
     * from a function is allowed. Here is a module that returns a 
     * function as its module definition:
     */
    return function(title) {
        var duration = 2000;
        // see http://requirejs.org/docs/api.html#pageload
        $(document).ready(function() {
            $('.carousel').carousel({
                interval: duration
            });
        });

        logger.log("Message ... ");

        return title ? (window.title = title) :
                'time ' + duration;
    };
});


