namespace MyApp.Controllers {

	// Home Controller
	export class HomeController {

		constructor(
			private mfpService: MyApp.Services.MyFamilyPlannerService,
			private $uibModal: angular.ui.bootstrap.IModalService,
			private $location: angular.ILocationService)
		{ }

	}

	angular.module("MyApp").controller("HomeController", HomeController);


	// Member List
	export class MembersController {
		public members;

		constructor(private mfpService: MyApp.Services.MyFamilyPlannerService,
								private $uibModal: angular.ui.bootstrap.IModalService,
								private $location: angular.ILocationService)
		{
			this.members = this.mfpService.listMembers();
		}
	}

	// Add New Member
	export class AddMemberController {
		public newMember;

		public save() {
			this.mfpService.save(this.newMember).then(() => {
				this.$location.path('/members');
			});
		}

		public cancel() {
			this.$location.path('/members');
		}

		constructor(private mfpService: MyApp.Services.MyFamilyPlannerService,
			private $uibModal: angular.ui.bootstrap.IModalService,
			private $location: angular.ILocationService)
		{ }
	}

	// Edit Member
	export class EditMemberController {
		public memberToEdit;

		public save() {
			this.mfpService.save(this.memberToEdit).then(() => {
				this.$location.path('/members');
			});
		}

		public cancel() {
			this.$location.path('/members');
		}

		constructor(private mfpService: MyApp.Services.MyFamilyPlannerService,
			private $uibModal: angular.ui.bootstrap.IModalService,
			private $location: angular.ILocationService,
			private $routeParams: ng.route.IRouteParamsService)
		{
			this.memberToEdit = mfpService.get($routeParams['id']);
		}
	}

	// Delete Member
	export class DeleteMemberController {
		public memberToEdit;

		public save() {
			this.mfpService.delete(this.memberToEdit).then(() => {
				this.$location.path('/members');
			});
		}

		public cancel() {
			this.$location.path('/members');
		}

		constructor(private mfpService: MyApp.Services.MyFamilyPlannerService,
			private $uibModal: angular.ui.bootstrap.IModalService,
			private $location: angular.ILocationService,
			private $routeParams: ng.route.IRouteParamsService)
		{
			this.memberToEdit = mfpService.get($routeParams['id']);
		}
	}

	// About Controller
	export class AboutController {

	}

}


