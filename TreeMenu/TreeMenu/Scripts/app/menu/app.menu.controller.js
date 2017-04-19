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
        vm.selectedNodeChanged = selectedNodeChanged;

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

        function selectedNodeChanged(node) {
            $scope.$state.go('content', { node: node });
        }

    }
})();