define(function(require, exports, module) {

    var readme = require("text!root/README.md"),
            /*
             * For HTML/XML/SVG files, there is another option. 
             * You can pass !strip, which strips XML declarations so that 
             * external SVG and XML documents can be added to a document 
             * without worry. Also, if the string is an HTML document, 
             * only the part inside the body tag is returned.
             */
            htmlBody = require("text!root/index.html!strip");

    return {
        init: function() {
            console.log(readme);
            console.log(htmlBody);
            console.log(readme.substring(0, 100) + "...");
        }
    };
});