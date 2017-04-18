; (function () {
    'use strict';

    // Define the 'menu' controller.
    angular
        .module('app.menu')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['$http', '$q', '$log', 'MenuService'];

    function MenuController($http, $q, $log, MenuService) {
        var vm = this;

        vm.primaryMenu = [];
        vm.primaryMenuItemClicked = primaryMenuItemClicked;

        activate();

        function activate() {
            getPrimaryMenu();
        }

        function getPrimaryMenu() {
            return MenuService.getPrimaryMenu().then(function (menu) {
                vm.primaryMenu = menu;
                return vm.primaryMenu;
            });
        }

        function getSecondaryMenu() {

        }

        function primaryMenuItemClicked(item) {
            $log.debug(item);
        }
    }
})();