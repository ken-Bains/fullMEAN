var usersController = require('../controller/users.js');

module.exports = function(app) {
	app.get('/users', function(request, response) {
		usersController.index(request, response)
	})
	app.post('/add', function(request, response){
		usersController.add(request,response)
	})
	app.get('/show/:id', function(request, response) {
		usersController.edit(request, response)
	})
	app.post('/edit/:id', function(request, response){
		console.log("edit route")
		usersController.update(request,response)
	})
	app.get('/delete/:id', function(request, response) {
		usersController.delete(request, response)
	})
}