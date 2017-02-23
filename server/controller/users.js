var mongoose = require('mongoose');
var Users = mongoose.model('Users')

module.exports = {
	index: function(req, res) {
		Users.find({}, function(err, user) {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				res.json({user});
			}
		})
	}, 
	edit: function(request, response) {
		Users.find({_id: request.params.id}, function(err, user) {
	  		response.json({user});
	  	})
	}, 
	update: function(request, response) {
		console.log(request.body, "update at user,js")
		var user = Users.update({_id: request.params.id}, {first: request.body.first, last: request.body.last, birthday: request.body.birthday}, function(err){
	    	response.json({user});
	  	})
	}, 
	delete: function(request, response) {
		Users.remove({_id: request.params.id}, function(err){
	    	response.json({});
	  	})

	}, 
	add: function(request, response) {
		var user = new Users({first: request.body.first, last: request.body.last, birthday: request.body.birthday});
		user.save(function(err) {
	    	if(err) {
	      		console.log('something went wrong', err);
	      		response.json({err});

	    	} else { // else console.log that we did well and then json to the root route
	      		console.log('successfully added a user!');
	      		response.json({user});
	    	}
	  	})
	}

}