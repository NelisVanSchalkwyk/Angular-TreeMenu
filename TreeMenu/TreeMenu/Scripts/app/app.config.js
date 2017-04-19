; (function () {
    'use strict';

    angular
        .module('app')
        .config(compileProviderConfig)
        .config(logProviderConfig)
        .config(routeConfig)
        .run(loadGlobalScopeUtilities);

    compileProviderConfig.$inject = ['$compileProvider'];

    function compileProviderConfig($compileProvider) {
        /*
         * Disable debug information. If you wish to debug an application with 
         * this information then you should open up a debug console in the browser 
         * then call this method directly in this console:
         * angular.reloadWithDebugInfo();
         */
        $compileProvider.debugInfoEnabled(true);
    }

    logProviderConfig.$inject = ['$logProvider'];

    function logProviderConfig($logProvider) {
        /*
         * Enabled or disable debug messages logged to the console.
         */
        $logProvider.debugEnabled(true);
    }

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {

        // For any unmatched url, send to /
        $urlRouterProvider.otherwise("/");

        var content = {
            sticky: true,
            name: 'content',
            url: '',
            views: {
                'main@': {
                    template: function ($stateParams) {
                        if ($stateParams.node) {
                            return '<strong>' + $stateParams.node.name + ' selected.</strong>';
                        }
                        return '<em>Please select a menu item.</em>';
                    }
                }
            },
            params: {
                node: {}
            }
        };

        $stateProvider.state(content);
    }

    loadGlobalScopeUtilities.$inject = ['$rootScope', '$window', '$state', '$stateParams'];

    function loadGlobalScopeUtilities($rootScope, $window, $state, $stateParams) {
        // Add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
})();