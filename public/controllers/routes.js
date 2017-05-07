/**
 * Created by ashani on 5/6/2017.
 */
angular.module("myApp").config(function($routeProvider) {
    $routeProvider
        .when("/addsupplier", {
            templateUrl : "views/supplier/form.html"
        })
        .when("/suppliersview/:id", {
            templateUrl : "views/supplier/updatesupplier.html"
        })
        .when("/viewsuppliers", {
            templateUrl : "views/supplier/form.html"
        })
        .when("/supplieradd", {
            templateUrl : "views/supplier/supplieradd.html"
        })
        .otherwise({
            template : "http://localhost:3000"
        });
});