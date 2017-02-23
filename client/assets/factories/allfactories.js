app.factory("UserFactory", function($http){
	factory = {};
	users = [];
	
	factory.index = function(callback){
		$http.get('/users').then(function(data){
			callback(data.data)
		})
		callback(users)
	}

	factory.add = function(newUser, callback){
		$http.post("/add", newUser).then(function(data){
			if (typeof(callback) == 'function'){
  				callback(data.data);
			}
		})
	}

	factory.show = function(userId, callback){
		var path = "/show/" + userId;
		$http.get(path).then(function(data){
			if (typeof(callback) == 'function'){
  				callback(data.data.user);
			}
		})
	}

	factory.edit = function(editUser, editUserId, callback){
		var path = "/edit/" + editUserId;
		$http.post(path, editUser).then(function(data){
			if (typeof(callback) == 'function'){
  				callback(data);
			}
		})
	}

	factory.remove = function(userId, callback){
		var path = "/delete/" + userId;
		$http.get(path).then(function(data){
			if (typeof(callback) == 'function'){
  				callback(data.data.user);
			}
		})
	}

	return factory
})