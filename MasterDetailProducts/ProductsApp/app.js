(function () {
    angular.module('ProductsApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/ngViews/productsList.html',
                controller: 'ProductsController',
                controllerAs: 'main'
            })
            .when('/details/:id', {
                templateUrl: '/ngViews/details.html',
                controller: 'DetailsController',
                controllerAs: 'main'
            })
            .otherwise({
                templateUrl: '/ngViews/notFound.html'
            });
        $locationProvider.html5Mode(true);
    });
})();