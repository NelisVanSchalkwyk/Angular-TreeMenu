; (function () {
    'use strict';

    // Define the 'menu' directive.
    angular
        .module('app.menu')
        .directive('menuTree', MenuTree);

    MenuTree.$inject = ['$log'];

    function MenuTree($log) {
        var directive = {
            restrict: 'EA',
            replace: true,
            scope: {
                nodes: '=',
                selectedNodeChanged: '&'
            },
            link: link,
            templateUrl: '/scripts/app/menu/menuTemplate.html'
        };

        return directive;

        function link(scope, element, attr) {
            scope.toggle = function (node, $event) {
                $event.stopPropagation();
                node.expanded = !node.expanded;

                if (!node.expanded) {
                    angular.forEach(node.Nodes, function (n) {
                        n.expanded = false;
                    });
                }
            };

            scope.nodeClicked = scope.nodeClicked || function (node) {
                angular.forEach(scope.nodes, function (item) {
                    item.selected = false;
                });

                node.selected = true;
                scope.selectedNodeChanged({ node: node });
            };
        }
    }
})();