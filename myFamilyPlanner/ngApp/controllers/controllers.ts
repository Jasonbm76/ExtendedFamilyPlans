namespace MyApp.Controllers {

	export class HomeController {

		constructor(
			private myFamilyPlannerService: MyApp.Services.MyFamilyPlannerService,
			private $uibModal: angular.ui.bootstrap.IModalService,
			private $location: angular.ILocationService)
		{
			//this.movies = this.movieService.listMovies();
		}

		public login() {

		}

	}

	export class AboutController {

	}
}