/**
 * Created by Jackson on 8/8/16.
 */
var app = angular.module('coinFlipApp', []);
app.controller('coinCtrl', function($scope){
    $scope.helloworld = "Hello, World!";
    $scope.playGame = function(){

    };

    $scope.heads = function(){
        $scope.guess = "Heads";
    };

    $scope.tails = function(){
        $scope.guess = "Tails";
    };

    $scope.flip = function(){
        var rand = Math.random();
        if(rand > 0.5){
            $scope.coin = "quarter-front.png";
            $scope.result = "Heads";
            console.log("Heads");
        }else{
            $scope.coin = "quarter-back.png";
            $scope.result = "Tails";
            console.log("Tails");
        }

        if($scope.result === $scope.guess){
            $scope.message = ("You win!!!!");
        }else{
            $scope.message = ("You had a 50/50 shot and blew it");
        }
    };
});