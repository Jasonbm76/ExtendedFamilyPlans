namespace MyApp.Services {

	export class MyFamilyPlannerService {

		public login() {

		}

		constructor(
			$resource: angular.resource.IResourceService) {
		}
	}

	angular.module('MyApp').service('myFamilyPlannerService', MyFamilyPlannerService);

}