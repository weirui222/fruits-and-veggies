/* setup your angular app here */

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
  }
}



angular.module('App', [])
.controller('appCtrl', ['$scope', function($scope) {
  $scope.pool = [];
  $scope.fruits = [];
  $scope.veggies = [];
  $scope.hasWon = false;

  for (var i = 0; i < fruits.length; i++) {
    $scope.pool.push(fruits[i]);
  }
  for (var i = 0; i < vegetables.length; i++) {
    $scope.pool.push(vegetables[i]);
  }
  shuffle($scope.pool);

  $scope.fruit = function(index) {
    $scope.fruits.push($scope.pool[index]);
    $scope.pool.splice(index, 1);
    $scope.hasWon = $scope.check();
  }

  $scope.veggie = function(index) {
    $scope.veggies.push($scope.pool[index]);
    $scope.pool.splice(index, 1);
    $scope.hasWon = $scope.check();
  }

  $scope.fruitToPool = function(index) {
    $scope.pool.push($scope.fruits[index]);
    $scope.fruits.splice(index, 1);
    $scope.hasWon = $scope.check();
  }

  $scope.veggieToPool = function(index) {
    $scope.pool.push($scope.veggies[index]);
    $scope.veggies.splice(index, 1);
    $scope.hasWon = $scope.check();
  }

  $scope.isFruit = function(item) {
    return fruits.indexOf(item) !== -1;
  }

  $scope.isVeggie = function(item) {
    return vegetables.indexOf(item) !== -1;
  }

  $scope.check = function() {
    if ($scope.pool.length > 0) {
      return false;
    }

    for (var i = 0; i < $scope.fruits.length; i++) {
      if (fruits.indexOf($scope.fruits[i]) === -1) {
        return false;
      }
    }

    for (var i = 0; i < $scope.veggies.length; i++) {
      if (vegetables.indexOf($scope.veggies[i]) === -1) {
        return false;
      }
    }

    return true;
  }
}]);
