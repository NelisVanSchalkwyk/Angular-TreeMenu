; (function () {
    'use strict';

    /**
     * A directive to display a tree view.
     * @example
     * // As an element.
     * <menu-tree data-nodes="[the data]" data-selected-node-changed="[the event handler]"></menu-tree>
     * // As an attribute.
     * <div data-menu-tree  data-nodes="[the data]" data-selected-node-changed="[the event handler]"></div>
     */
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
            /*
             * Toggles whether a node is expanded or not.
            */
            scope.toggle = function (node, $event) {
                $event.stopPropagation();
                node.expanded = !node.expanded;

                if (!node.expanded) {
                    angular.forEach(node.nodes, function (n) {
                        n.expanded = false;
                    });
                }
            };

            /*
             * Handles the nodeClicked event and sets the node as selected.
            */
            scope.nodeClicked = function (node) {
                clearSelection(scope.nodes);

                node.selected = true;
                scope.selectedNodeChanged({ node: node });
            };

            /*
             * Sets the selected property of all the nodes to false.
             */
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