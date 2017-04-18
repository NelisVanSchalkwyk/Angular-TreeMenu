; (function () {
    'use strict';

    // Define the 'menu' service.
    angular
        .module('app.menu')
        .factory('MenuService', MenuService);

    MenuService.$inject = ['$http', '$q', '$log'];

    function MenuService($http, $q, $log) {
        var service = {
            getPrimaryMenu: getPrimaryMenu,
            getSecondaryMenu: getSecondaryMenu
        };

        return service;

        function getPrimaryMenu() {
            return $http.get("/api/menu/primary")
                .then(getPrimaryMenuCompleted);

            function getPrimaryMenuCompleted(result) {
                return result.data;
            }
        }

        function getSecondaryMenu() {
            return $http.get("/api/menu/secondary")
                .then(getSecondaryMenuCompleted);

            function getSecondaryMenuCompleted(result) {
                return result.data;
            }
        }
    }
})();