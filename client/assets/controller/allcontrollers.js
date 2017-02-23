
app.controller("AllController", function($scope, UserFactory, $location){
	$scope.users = [];
	
	var index = function(){
		UserFactory.index(function(data){
			$scope.users = data;
		})
	}
	index();

	$scope.removeUser = function(userId){
		UserFactory.remove(userId, function(data){
			index();
		})
	}
})

app.controller("ShowController", function($scope, UserFactory, $routeParams, $location) {
	$scope.user = {};
	UserFactory.show($routeParams.id, function(data){
		$scope.user = data[0];
	})
})


app.controller("EditController", function($scope, UserFactory, $routeParams, $location) {
	$scope.editUser = {};
	
	UserFactory.show($routeParams.id, function(data){
		$scope.editUser = data[0];
	})

	$scope.editedUser = function(editUserId){
		console.log($scope.editUser, "edituserid")
		UserFactory.edit($scope.editUser, editUserId, function(data){
			$location.url('/');
		})
	}
})


app.controller("NewController", function($scope, UserFactory, $location){
	
	$scope.addUser = function(newUser){
		UserFactory.add($scope.newUser, function(data){
			newUser = {}
			$location.url('/');
		})
	}
})