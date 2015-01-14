(function() {
    'use strict';

    angular.module('numbrrrs')
        .controller('MainCtrl', function($scope, MainService, $animate, $timeout, $mdDialog) {

            $scope.score = 0;
            // $scope.lastQuestion = false;

            var newQuestion = function() {
                MainService.loadQuestion().then(function(result) {
                    $scope.question = result.data;
                    console.log($scope.question.number);
                });
            };

            $scope.checkAnswer = function() {
                if ($scope.answer == $scope.question.number) {
                    $scope.lastQuestion = "right";
                    $scope.class = "md-green-theme";
                    // $mdToast.show({
                    //        template: '<md-toast>Right!</md-toast>',
                    //        hideDelay: 5000,
                    //        position: 'top left'
                    // });
                    $scope.score += 1;
                } else {
                    $scope.lastQuestion = "wrong";
                    $scope.class = "md-red-theme";
                    // $mdToast.show({
                    //        template: '<md-toast>Oh noes! The right answer was ' + $scope.question.number + '.</md-toast>',
                    //        hideDelay: 5000,
                    //        position: 'top left'
                    // });
                    // $scope.score -= 1;
                };
                $scope.answer = null;
                $scope.question = null;
                $timeout(function() {
                    $scope.lastQuestion = false;
                }, 2000);
                newQuestion();
            };

            newQuestion();

            $scope.showAlert = function() {
                var alert = $mdDialog.alert()
                    .title('How to play numbrrrs?')
                    .content("Playing numbrrrs is really easy. It's like a trivia, but the answer to every question is a number (or, like we like to say, a 'numbrrr'.) You can use the slider or the number field to enter your answer to each question. Each round consists of ten question. For each correct answer you'll get a point. That's pretty much it!")
                    .ok("Let's play then!");
                $mdDialog
                    .show(alert)
            }

        });
}(angular));
