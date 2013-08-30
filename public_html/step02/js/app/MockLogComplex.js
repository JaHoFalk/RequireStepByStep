/* 
 * Module Version 2
 */
define(function(require, exports, module) {
    return {
        log: function(item) {
            console.log(";-) ComplexLogger: " + item);
            console.log(";-)" + " ModuleId: " + module.id + " ModuleUri: " + module.uri);
        }
    };

});



