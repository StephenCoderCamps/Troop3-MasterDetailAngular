(function () {
    var products = [
            { id: 1, name: "Garden Gnome", price: 2.50, description: "...Connor's favorite garden object." },
            { id: 2, name: "Laptop", price: 2000, description: "Nathan's future laptop (16gb RAM)." },
            { id: 3, name: "Tesla", price: 20000, description: "Stephen's dream car." }
    ];

    angular.module('ProductsApp').controller('ProductsController', function ($modal) {
        this.products = products;
        this.showModal = function (id) {
            $modal.open({
                templateUrl: '/ngViews/ModalDetails.html',
                controller: 'ModalDetailsController',
                controllerAs: 'modal',
                resolve: {
                    id: function () {
                        return id;
                    }
                }
            })
        }
    });

    angular.module('ProductsApp').controller('DetailsController', function ($routeParams) {
        debugger;
        this.product = products.filter(function (item) {
            return item.id == $routeParams.id;
        })[0];
    });

    angular.module('ProductsApp').controller('ModalDetailsController', function (id, $modalInstance) {
        
        this.product = products.filter(function (item) {
            return item.id == id;
        })[0];

        this.ok = function () {
            $modalInstance.close();
        };
    });


})();