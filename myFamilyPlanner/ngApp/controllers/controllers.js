var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        // Home Controller
        var HomeController = (function () {
            function HomeController(mfpService, $uibModal, $location) {
                this.mfpService = mfpService;
                this.$uibModal = $uibModal;
                this.$location = $location;
            }
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        angular.module("MyApp").controller("HomeController", HomeController);
        // Member List
        var MembersController = (function () {
            function MembersController(mfpService, $uibModal, $location) {
                this.mfpService = mfpService;
                this.$uibModal = $uibModal;
                this.$location = $location;
                this.members = this.mfpService.listMembers();
            }
            return MembersController;
        })();
        Controllers.MembersController = MembersController;
        // Add New Member
        var AddMemberController = (function () {
            function AddMemberController(mfpService, $uibModal, $location) {
                this.mfpService = mfpService;
                this.$uibModal = $uibModal;
                this.$location = $location;
            }
            AddMemberController.prototype.save = function () {
                var _this = this;
                this.mfpService.save(this.newMember).then(function () {
                    _this.$location.path('/members');
                });
            };
            AddMemberController.prototype.cancel = function () {
                this.$location.path('/members');
            };
            return AddMemberController;
        })();
        Controllers.AddMemberController = AddMemberController;
        // Edit Member
        var EditMemberController = (function () {
            function EditMemberController(mfpService, $uibModal, $location, $routeParams) {
                this.mfpService = mfpService;
                this.$uibModal = $uibModal;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.memberToEdit = mfpService.get($routeParams['id']);
            }
            EditMemberController.prototype.save = function () {
                var _this = this;
                this.mfpService.save(this.memberToEdit).then(function () {
                    _this.$location.path('/members');
                });
            };
            EditMemberController.prototype.cancel = function () {
                this.$location.path('/members');
            };
            return EditMemberController;
        })();
        Controllers.EditMemberController = EditMemberController;
        // Delete Member
        var DeleteMemberController = (function () {
            function DeleteMemberController(mfpService, $uibModal, $location, $routeParams) {
                this.mfpService = mfpService;
                this.$uibModal = $uibModal;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.memberToEdit = mfpService.get($routeParams['id']);
            }
            DeleteMemberController.prototype.save = function () {
                var _this = this;
                this.mfpService.delete(this.memberToEdit).then(function () {
                    _this.$location.path('/members');
                });
            };
            DeleteMemberController.prototype.cancel = function () {
                this.$location.path('/members');
            };
            return DeleteMemberController;
        })();
        Controllers.DeleteMemberController = DeleteMemberController;
        // About Controller
        var AboutController = (function () {
            function AboutController() {
            }
            return AboutController;
        })();
        Controllers.AboutController = AboutController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
