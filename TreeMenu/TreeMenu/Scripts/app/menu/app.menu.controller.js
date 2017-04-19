; (function () {
    'use strict';

    /* Define the 'menu' controller. */
    angular
        .module('app.menu')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['$scope', 'MenuService'];

    function MenuController($scope, MenuService) {
        var vm = this;

        vm.primaryMenu = [];
        vm.secondaryMenu = [];
        vm.primaryMenuSelected = primaryMenuSelected;
        vm.secondaryMenuSelected = secondaryMenuSelected;

        activate();

        /*
         * Runs when the controller initializes.
         */
        function activate() {
            getPrimaryMenu();
        }

        /*
         * Gets the data for the primary menu.
         * @returns {Object} The tree object.
        */
        function getPrimaryMenu() {
            return MenuService.getPrimaryMenu().then(function (menu) {
                vm.primaryMenu = menu;
                return vm.primaryMenu;
            });
        }

        /*
         * Gets the data for the secondary menu.
         * @param {int} - The id of the primary menu item.
         * @returns {Object} The tree object.
        */
        function getSecondaryMenu(primaryMenuId) {
            return MenuService.getSecondaryMenu(primaryMenuId).then(function (menu) {
                vm.secondaryMenu = menu;
                return vm.secondaryMenu;
            });
        }

        /*
         * Handles the selection change event for the primary menu.
         * @param {Object} - The selected node.
        */
        function primaryMenuSelected(node) {
            $scope.$state.go('content', { node: node });
            getSecondaryMenu(node.id);
        }

        /*
         * Handles the selection change event for the secondary menu.
         * @param {Object} - The selected node.
        */
        function secondaryMenuSelected(node) {
            $scope.$state.go('content', { node: node });
        }

    }
})();