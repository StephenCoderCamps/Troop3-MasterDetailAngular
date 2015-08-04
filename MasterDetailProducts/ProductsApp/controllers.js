(function () {
    var products = [
            { id: 1, name: "Garden Gnome", price: 2.50, description: "...Connor's favorite garden object." },
            { id: 2, name: "Laptop", price: 2000, description: "Nathan's future laptop (16gb RAM)." },
            { id: 3, name: "Tesla", price: 20000, description: "Stephen's dream car." }
    ];

    angular.module('ProductsApp').controller('ProductsController', function () {
        this.products = products;
    });

    angular.module('ProductsApp').controller('DetailsController', function ($routeParams) {
        debugger;
        this.product = products.filter(function (item) {
            return item.id == $routeParams.id;
        })[0];
    });
})();