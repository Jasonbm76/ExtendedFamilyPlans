namespace MyApp.Services {

	export class MyFamilyPlannerService	{
		private MyFamilyPlannerResource;

		// Constructor
		constructor($resource: angular.resource.IResourceService) {
			this.MyFamilyPlannerResource = $resource('/api/members/:id');
		}

		// List Family Members
		public listMembers() {
			return this.MyFamilyPlannerResource.query();
		}

		// Save Family Member
		public save(member)	{
			return this.MyFamilyPlannerResource.save(member).$promise;
		}

		// Get Family Member
		public get(id: number) {
			return this.MyFamilyPlannerResource.get({ id: id });
		}

		// Delete Family Member
		public delete(member)	{
			return this.MyFamilyPlannerResource.delete({ id: member.id }).$promise;
		}

	}

	angular.module('MyApp').service('mfpService', MyFamilyPlannerService);

}