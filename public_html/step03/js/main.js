require.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    
    /* path mappings for module names not found directly under baseUrl,
     * relative to baseUrl
     */

    paths: {
        // hint: use https://github.com/volojs/volo instead

        /*
         * Fallbacks are targeted more for unusual error recovery, 
         * not a generic path search path solution, since those are 
         * inefficient in the browser.
         */
        jquery: [
            'http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
            'jquery-2.0.3'],
        app: '../app',
        root: '../../../step03'
    },
    /*
     * This feature only works well for scripts that are real 
     * AMD modules that call define() 
     * for all modules loaded, use this map config
     * -> <module Name>/<source for current used module>
     */
    map: {
        '*': {
            'app/mocklog': '../app/MockLogComplex'
        }
    },
    /*
     * Configure the dependencies, exports, and custom initialization 
     * for older, traditional "browser globals" scripts that do not 
     * use define() to declare the dependencies and set a module value.
     */
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    },
    i18n: {
        locale: 'fr'
    }

});

// Start the main app logic.
require(['jquery', 'bootstrap', '../app/init'],
        function($, bootstrap, init) {
            /*jQuery and bootstrap module are all
             loaded and can be used here now.
             Note that this function could
             be called before the page is loaded.
             This callback is optional.*/
            init('Test');
        });
