var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var MyFamilyPlannerService = (function () {
            function MyFamilyPlannerService($resource) {
            }
            MyFamilyPlannerService.prototype.login = function () {
            };
            return MyFamilyPlannerService;
        })();
        Services.MyFamilyPlannerService = MyFamilyPlannerService;
        angular.module('MyApp').service('myFamilyPlannerService', MyFamilyPlannerService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=services.js.map