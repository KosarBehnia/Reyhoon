
var app = angular.module('myApp', []);
app .controller('myCtrl', ['$scope', function($scope) {
    $scope.count = 0;
    $scope.myFunc = function() {
      $scope.count++;
      console.log($scope.count);
      let element = this.document.getElementbyClassName('but1');
     element.style.display = element.style.display === 'none' ? 'block' : 'none';
    };
  }]);
 function ch(){
      location.replace("http://localhost:4200/second")
      var el = document.getElementById('but1');
     el.remove();

  }