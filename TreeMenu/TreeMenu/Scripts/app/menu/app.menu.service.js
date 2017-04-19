; (function () {
    'use strict';

    /* Define the 'menu' service. */
    angular
        .module('app.menu')
        .factory('MenuService', MenuService);

    MenuService.$inject = ['$http'];

    function MenuService($http) {
        var service = {
            getPrimaryMenu: getPrimaryMenu,
            getSecondaryMenu: getSecondaryMenu
        };

        return service;

        /*
         * Gets the data for the primary menu.
         * @returns {Promise}.
        */
        function getPrimaryMenu() {
            return $http.get('/api/menu/primary')
                .then(getPrimaryMenuCompleted);

            function getPrimaryMenuCompleted(result) {
                return result.data;
            }
        }

        /*
         * Gets the data for the secondary menu.
         * @returns {Promise}.
        */
        function getSecondaryMenu(id) {
            return $http.get('/api/menu/secondary/' + id)
                .then(getSecondaryMenuCompleted);

            function getSecondaryMenuCompleted(result) {
                return result.data;
            }
        }
    }
})();