var app = angular.module('styleApp', []);
app.controller('styleCtrl', function($scope){
	$scope.myColor = "red";
	var Student = function(name, formerly){
		this.name = name;
		this.former = formerly;
	}

	$scope.students = [];
	$scope.students.push(new Student('Brett', 'USAF'));	
	$scope.students.push(new Student('Wes', 'Wildcat (Also Mr. Clean model)'));	
	$scope.students.push(new Student('Drew', 'Westminster Warrior'));
	$scope.students.push(new Student('Daniel', 'Cheering for Argentina in Rio'));
	$scope.students.push(new Student('Danielle', 'Likes "The Who"'));	
	$scope.students.push(new Student('Dan', 'Lego Nerd'));
	$scope.students.push(new Student('Danny', 'Strat Ruiner'));
	$scope.students.push(new Student('Alex', 'Assassin. Trust me.'));
	$scope.students.push(new Student('Paige', 'Burnt easily'));
	$scope.students.push(new Student('Dave', 'Cam lover'));
	$scope.students.push(new Student('Eric', 'Useless without BS'));
	$scope.students.push(new Student('Shirlette', 'Where is she?'));
	$scope.students.push(new Student('Jackson', 'Volition development'));
	$scope.students.push(new Student('JT', 'Every woman\'s dream'));
	$scope.students.push(new Student('Summer', 'CS Ninja'));
	

});
