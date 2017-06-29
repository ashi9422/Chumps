/**
 * Created by ashani on 5/6/2017.
 */
angular.module("myApp").config(function($routeProvider) {
    $routeProvider
        .when("/addsupplier", {
            templateUrl : "views/supplier/supplierAdd.html"
        })
        .when("/suppliersview/:id", {
            templateUrl : "views/supplier/supplierUpdate.html"
        })
        .when("/viewsuppliers", {
            templateUrl : "views/supplier/supplierView.html"
        })
        .when("/supplieradd", {
            templateUrl : "views/supplier/supplierAdd.html"
        })
        .when("/adddrugorder", {
            templateUrl : "views/stock/drugOrderAdd.html"
        })
        .when("/drugorderview/:id", {
            templateUrl : "views/stock/drugOrderUpdate.html"
        })
        .when("/viewdrugorder", {
            templateUrl : "views/stock/drugOrderView.html"
        })
        .when("/drugorderadd", {
            templateUrl : "views/stock/drugOrderAdd.html"
        })
        .otherwise({
            template : "http://localhost:3000"
        });
});