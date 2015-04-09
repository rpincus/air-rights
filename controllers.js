function BuildingListController( $scope ){

	];

var mapApp = angular.module("graphApp",["ngRoute","appControllers", "firebase"]);

var appControllers = angular.module("appControllers", []);

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://rpincus.firebaseio.com/urbanism");
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
    $scope.graphData = $firebaseArray(ref);
});