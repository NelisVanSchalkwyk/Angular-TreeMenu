; (function () {
    'use strict';

    // Define the 'app' module.
    angular
        .module('app', [
		    // ...which depends on the following modules.

            /**
             * Angular modules
             */

            /**
             * 3rd Party modules
             */
            'ui.router',
            /**
             * Application modules
             */
             'app.menu',

            /**
             * Common modules
             */
        ]);
})();