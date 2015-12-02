var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(myFamilyPlannerService, $uibModal, $location) {
                this.myFamilyPlannerService = myFamilyPlannerService;
                this.$uibModal = $uibModal;
                this.$location = $location;
                //this.movies = this.movieService.listMovies();
            }
            HomeController.prototype.login = function () {
            };
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
            }
            return AboutController;
        })();
        Controllers.AboutController = AboutController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=controllers.js.map