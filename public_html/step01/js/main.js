require.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    app: '../app',
    
    paths: {
        // hint: use https://github.com/volojs/volo instead
        jquery: 'jquery-2.0.3'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    }
});

// Start the main app logic.
require(['jquery', 'bootstrap', '../app/init'],
        function($, bootstrap, init) {
            //jQuery and bootstrap module are all
            //loaded and can be used here now.
            init.init();
        });
