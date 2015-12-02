namespace MyApp {

	angular.module('MyApp', ['ngRoute', 'ngResource', 'ui.bootstrap'])
		.config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {

			$routeProvider
            .when('/', {
                templateUrl: '/ngApp/views/home.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .when('/login', {
                templateUrl: '/ngApp/views/login.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/ngApp/views/notFound.html'
            });

        $locationProvider.html5Mode(true);
    });

}