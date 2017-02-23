var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "partials/all.html",
		controller: "AllController"
	})
	.when("/new", {
		templateUrl: "partials/new.html",
		controller: "NewController"
	})	
	.when("/edit/:id", {
		templateUrl: "partials/edit.html",
		controller: "EditController"
	})
	.when("/user/:id", {
		templateUrl: "partials/show.html",
		controller: "ShowController"
	})
	.otherwise({
		redirectTo: "/"
	})
})
