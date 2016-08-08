/**
 * Created by Jackson on 8/8/16.
 */
var app = angular.module('repeatApp', []);
app.controller('repeatCtrl', function($scope){
    $scope.students = [
        "Shirlette",
        "Jackson",
        "JT",
        "Summer"
    ];

    $scope.addStudent = function(){
        $scope.students.push($scope.newStudent);
        $scope.newStudent = "";
    }
});