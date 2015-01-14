(function() {
    'use strict';

    angular.module('numbrrrs')
        .service('MainService', function($http) {
            this.loadQuestion = function() {
                var baseUrl = "https://numbersapi.p.mashape.com/random/";
                var types = ["trivia", "math"];
                var randomIndex = Math.floor(Math.random() * (2 - 0)) + 0;
                var tailsUrl = "?fragment=true&json=true&max=1000&min=0";
                var url = baseUrl + types[randomIndex] + tailsUrl;
                var req = $http.get(
                    url, {
                        headers: {
                            'X-Mashape-Authorization': '7GnSf8nCvamshkZsylRo7JIy40D5p1Roup0jsnWq0tFlVQkTyB'
                        }
                    });
                return req;
            };
        });
}(angular));
