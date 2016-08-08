/**
 * Created by Jackson on 8/8/16.
 */

var app = angular.module('todoApp', []);
app.controller('todoCtrl', function($scope){

    $scope.todoList = [
        {
            title: 'Hello World!',
            desc: 'Hello, World!',
            completed: false
        }
    ];

    $scope.addItem = function(){
        $scope.todoList.push({
            title: $scope.title,
            desc: $scope.desc
        });
    };

    $scope.complete = function(task){
        $scope.todoList[task].completed = !$scope.todoList[task].completed;
    };

    $scope.textDecor = function(index){
        if($scope.todoList[index].completed){
            return {
                'text-decoration': 'line-through'
            }
        }else{
            return {
                'text-decoration': 'none'
            }
        }
    };

    $scope.remove = function(index){
        $scope.todoList.splice(index, 1);
        console.log("Removed " + index);
    }
});