(function() {
    'use strict';

    angular.module('numbrrrs')
        .directive('twitter', ['$timeout', '$window', function($timeout, $window) {
            return {
                link: function(scope, element, attr) {
                    $timeout(function() {
                        $timeout(function() {
                            twttr.widgets.createShareButton(
                                attr.url || $window.location.href,
                                element[0],
                                function() {}, {
                                    count: attr.count,
                                    text: attr.text,
                                    via: attr.via,
                                    size: attr.size
                                }
                            );
                        });
                    });
                }
            };
        }]);
}(angular));
