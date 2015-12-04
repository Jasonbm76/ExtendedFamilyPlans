namespace MyApp {

	angular.module('MyApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'mgcrea.ngStrap'])
		.config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {

			$routeProvider
				.when('/', {
					templateUrl: '/ngApp/views/home.html',
					controller: MyApp.Controllers.HomeController,
					controllerAs: 'controller'
				})
				.when('/home', {
					templateUrl: '/ngApp/views/home.html',
					controller: MyApp.Controllers.HomeController,
					controllerAs: 'controller'
				})
				.when('/members', {
					templateUrl: '/ngApp/views/members.html',
					controller: MyApp.Controllers.MembersController,
					controllerAs: 'controller'
				})
				.when('/addMember', {
					templateUrl: '/ngApp/views/addMember.html',
					controller: MyApp.Controllers.AddMemberController,
					controllerAs: 'controller'
				})
				.when('/editMember/:id', {
					templateUrl: '/ngApp/views/editMember.html',
					controller: MyApp.Controllers.EditMemberController,
					controllerAs: 'controller'
				})
				.when('/deleteMember/:id', {
					templateUrl: '/ngApp/views/deleteMember.html',
					controller: MyApp.Controllers.DeleteMemberController,
					controllerAs: 'controller'
				})
				.when('/about', {
					templateUrl: '/ngApp/views/about.html',
					controller: MyApp.Controllers.AboutController,
					controllerAs: 'controller'
				})
				.when('/login', {
					templateUrl: '/ngApp/views/login.html',
					controller: MyApp.Controllers.LoginController,
					controllerAs: 'controller'
				})
				.when('/register', {
					templateUrl: '/ngApp/views/register.html',
					controller: MyApp.Controllers.RegisterController,
					controllerAs: 'controller'
				})
				.when('/externalLogin', {
					templateUrl: '/ngApp/views/externalLogin.html',
					controller: MyApp.Controllers.ExternalLoginController,
					controllerAs: 'controller'
				})
				.when('/externalRegister', {
					templateUrl: '/ngApp/views/externalRegister.html',
					controller: MyApp.Controllers.ExternalRegisterController,
					controllerAs: 'controller'
				})
				.when('/confirmEmail', {
					templateUrl: '/ngApp/views/confirmEmail.html',
					controller: MyApp.Controllers.ConfirmEmailController,
					controllerAs: 'controller'
				})
				.otherwise({
					redirectTo: '/ngApp/views/notFound.html'
				});

			$locationProvider.html5Mode(true);
    });

}