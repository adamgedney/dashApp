
//==========================================//
//App dependencies
//==========================================//

var App = angular.module('dash', ['ngRoute']);







//==========================================//
//Routing
//==========================================//
App.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl : 'views/home.tpl',
			controller 	: 'home'
		})
		.otherwise({
		    redirectTo: '/'
		  })
});







//==========================================//
// Filters
//==========================================//
App.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);