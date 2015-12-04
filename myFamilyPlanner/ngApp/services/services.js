var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var MyFamilyPlannerService = (function () {
            // Constructor
            function MyFamilyPlannerService($resource) {
                this.MyFamilyPlannerResource = $resource('/api/members/:id');
            }
            // List Family Members
            MyFamilyPlannerService.prototype.listMembers = function () {
                return this.MyFamilyPlannerResource.query();
            };
            // Save Family Member
            MyFamilyPlannerService.prototype.save = function (member) {
                return this.MyFamilyPlannerResource.save(member).$promise;
            };
            // Get Family Member
            MyFamilyPlannerService.prototype.get = function (id) {
                return this.MyFamilyPlannerResource.get({ id: id });
            };
            // Delete Family Member
            MyFamilyPlannerService.prototype.delete = function (member) {
                return this.MyFamilyPlannerResource.delete({ id: member.id }).$promise;
            };
            return MyFamilyPlannerService;
        })();
        Services.MyFamilyPlannerService = MyFamilyPlannerService;
        angular.module('MyApp').service('mfpService', MyFamilyPlannerService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
