(function () {

angular.module('myFirstApp', [])

.controller('firstController', function1);
  var total1 = 0;
  function1.$inject = ['$scope', '$filter'];
  function function1($scope, $filter) {
  $scope.name = "Ishan";
  $scope.totalValue = 0;
  $scope.upper = function () {
    $scope.name = $filter('uppercase')($scope.name)
  }
}

  function calcValue(string){
    total1 += 5;
    return total1;
  }
})();
