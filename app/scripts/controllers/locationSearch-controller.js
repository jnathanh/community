'use strict';

/**
 * @ngdoc function
 * @name applicationApp.controller:LocationSearchCtrl
 * @description
 * # LocationSearchCtrl
 * Controller of the location search 
 */
angular.module('applicationApp')
  .controller('LocationSearchCtrl',['$scope','$resource', function ($scope,$resource) {
	$scope.zip = "";
	$scope.results = [];
	$scope.locations = [];
	var locationsFile = $resource('data/locations.json');		

	$scope.typeAction = function(){
		$scope.results = [];

		// get first 5 results from zips
		
		_($scope.locations).find(function(x){
			if(x.postal_code.match($scope.zip))
				$scope.results.push(x);
			return $scope.results.length > 4;})

		console.log('you typed something');
	};

	function getZipFile(){
		locationsFile.query().$promise.then(function(data){
			$scope.locations = data;
		});


		//$http.get('data/locations.json').success(function(data) {
		//	// you can do some processing here
		//	$scope.locations = data;
		//	console.log(data);
 		//});

		//return $.getJSON("data/locations.json", function( data ) {
		//	return JSON.parse(data);
		//});
	}
	getZipFile();
  }]);
