(function() {
    'use strict';

    angular.module('numbrrrs')
        .controller('MainCtrl', function($scope, MainService, $animate, $timeout, $mdDialog, $window) {

            $scope.score = 0;
            $scope.rounds = 0;
            $scope.gameOver = false;
            // $scope.lastQuestion = false;

            var newQuestion = function() {
                MainService.loadQuestion().then(function(result) {
                    $scope.question = result.data;
                });
            };

            var oneMoreRound = function() {
                $scope.rounds = $scope.rounds + 1;
                if ($scope.rounds >= 10) {
                    $scope.gameOver = true;
                };
            }

            $scope.checkAnswer = function() {
                oneMoreRound();
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
                    .content("Playing numbrrrs is really easy. It's like a trivia, but the answer to every question is a number (or, like we like to say, a 'numbrrr') between 0 and 1,000. You can use the slider or the number field to enter your answer to each question. Each game consists of ten rounds. For each correct answer you'll get one point. That's pretty much it!")
                    .ok("Let's play then!");
                $mdDialog
                    .show(alert)
            }

            $scope.startAgain = function() {
                $window.location.reload();
            }

        });
}(angular));
