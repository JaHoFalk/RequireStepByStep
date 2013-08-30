define(function(require, exports, module) {

    var     html = require("text!root/index.html"),
            htmlBody = require("text!root/index.html!strip"),
            css = require("text!root/css/bootstrap.css");

    return {
        init: function() {
            console.log(html);
            console.log(htmlBody);
            console.log(css.substring(0,100) + "...");
        }
    };
});