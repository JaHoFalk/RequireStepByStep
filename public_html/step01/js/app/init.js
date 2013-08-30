/* 
 * Definition Functions with Dependencies
 * 
 * see http://requirejs.org/docs/whyamd.html#sugar
 */

define(function(require) {
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

    /*
     * The return object from the function call defines the module
     */
    return {
        duration: 2000,
        init: function() {
            // see http://requirejs.org/docs/api.html#pageload
            $(document).ready(function() {
                $('.carousel').carousel({
                    interval: this.duration
                });
            });
        }
    };
});


