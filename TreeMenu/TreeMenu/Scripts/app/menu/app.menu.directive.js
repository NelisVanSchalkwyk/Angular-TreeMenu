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
                    angular.forEach(node.nodes, function (n) {
                        n.expanded = false;
                    });
                }
            };

            scope.nodeClicked = scope.nodeClicked || function (node) {
                clearSelection(scope.nodes);

                node.selected = true;
                scope.selectedNodeChanged({ node: node });
            };

            var clearSelection = function (nodes) {
                angular.forEach(nodes, function (item) {
                    item.selected = false;
                    if (item.nodes.length > 0) {
                        clearSelection(item.nodes);
                    }
                });
            };
        }
    }
})();