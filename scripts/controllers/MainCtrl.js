// create the controller and inject Angular's $scope
app.controller('MainCtrl', function($scope) {
  // create a message to display in our view
  $scope.header = 'GiftPrompt';
  $scope.create = 'Create Group'
  
  $scope.pending = [
  	{group:1, creator:'Bing Crosby', deadline:'Dec. 5', size:2},
  	{group:2, creator:'Patsy Cline', deadline:'Dec. 24', size:11},
  	{group:3, creator:'Nat King Cole', deadline:'Dec. 17', size:5},
  	{group:4, creator:'Judy Garland', deadline:'Dec. 19', size:7},
  ]

  $scope.paired = [
  	{name:'Dean Martin', preferences:'puppies', group:5},
  	{name:'Frank Sinatra', preferences:'microphones', group:6},
  	{name:'Doris Day', preferences:'perfume', group:7}
  ]

  var init = function() {
  	for (var i = $scope.paired.length - 1; i >= 0; i--) {
  		console.log($scope.paired[i])
  	};
  };
  
  init();
});