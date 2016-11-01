angular.module('app').controller('mainCtrl', function($scope) {

  $scope.getRandomColor = function() {
    var letters = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters.charAt(Math.floor(Math.random() * 16));
    }
    return color;
  };

  

});
