(function () {

angular.module('LunchChecker', [])

.controller('firstController', function1);
  var total1 = 0;
  function1.$inject = ['$scope', '$filter'];
  function function1($scope, $filter) {
    $scope.itemsList = "";
    $scope.countItems = function () {
      var list = $scope.itemsList.split(",");
      var actual = list.length;
      for (var i =0; i<list.length;i++) {
        if ( list[i] == " ") {
          actual -= 1;
        }
      }
    if ($scope.itemsList == 0) {
      $scope.output = "Please Enter data first";
      }
    else if (actual > 3){
      $scope.output = "Too much!";
      $scope.itemsList = "";
      }
    else if (actual < 3) {
      $scope.output = "Enjoy!";
      }
    console.log(actual)
    console.log(list.length)
    console.log($scope.itemsList)
      }
    }
})();
