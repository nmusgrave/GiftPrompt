// create the controller and inject Angular's $scope
app.controller('MainCtrl', function($scope) {
  // create a message to display in our view
  $scope.header = 'Secret Santa';
  $scope.create = 'Create Group'
  
  var init = function() {
    console.log("hello")
  };
  
  init();
});