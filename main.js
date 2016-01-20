
// module
angular.module('banana', []);


// register a controller to our module

angular.module('banana').controller('bananatroller', ['$scope', function($scope){


	$scope.click = function() {
		console.log("Hello");
		$scope.greeting = "HELLO";
	}

	$scope.clock = function() {
		$scope.hidden = true
		}


}])