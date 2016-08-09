/**
 * Created by Jackson on 8/8/16.
 */

var app = angular.module('changeApp', []);
app.controller('changeCtrl', function($scope){

    var decrimentVals = [0.25, 0.1, 0.05, 0.01];
    $scope.quarters = 0;
    $scope.dimes = 0;
    $scope.nickels = 0;
    $scope.pennies = 0;

    $scope.$watch('given', function(){
        var change = $scope.given - $scope.bill;
        if(change > 0){
            var i = 0;

            while(change - decrimentVals[i] > 0){
                if(change - decrimentVals[i] < 0){
                    if(i != decrimentVals.length - 1){
                        i++;
                    }
                }

                console.log(change);
                switch(i){
                    case 0:
                        $scope.quarters += 1;
                        break;
                    case 1:
                        $scope.dimes += 1;
                        break;
                    case 2:
                        $scope.nickels += 1;
                        break;
                    case 3:
                        $scope.pennies += 1;
                        break;
                }



                change -= decrimentVals[i];
            }
        }
    })
});