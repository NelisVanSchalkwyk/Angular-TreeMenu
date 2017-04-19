; (function () {
    'use strict';

    // Define the 'menu' controller.
    angular
        .module('app.menu')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['$scope', '$http', '$q', '$log', 'MenuService'];

    function MenuController($scope, $http, $q, $log, MenuService) {
        var vm = this;

        vm.primaryMenu = [];
        vm.secondaryMenu = [];
        vm.primaryMenuSelected = primaryMenuSelected;
        vm.secondaryMenuSelected = secondaryMenuSelected;

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

        function getSecondaryMenu(primaryMenuId) {
            return MenuService.getSecondaryMenu(primaryMenuId).then(function (menu) {
                vm.secondaryMenu = menu;
                return vm.secondaryMenu;
            });
        }

        function primaryMenuSelected(node) {
            $scope.$state.go('content', { node: node });
            getSecondaryMenu(node.id);
        }

        function secondaryMenuSelected(node) {
            $scope.$state.go('content', { node: node });
        }

    }
})();