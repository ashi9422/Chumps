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
            templateUrl : "views/drug/drugAdd.html"
        })
        .when("/adddrug", {
            templateUrl : "views/drug/drugAdd.html"
        })
        .when("/drugview/:id", {
            templateUrl : "views/drug/drugUpdate.html"
        })
        .when("/viewdrug", {
            templateUrl : "views/drug/drugView.html"
        })
        .when("/drugadd", {
            templateUrl : "views/stock/drugOrderAdd.html"
        })
        .when("/addprescription", {
            templateUrl : "views/prescription/prescriptionAdd.html"
        })
        .when("/prescriptionview/:id", {
            templateUrl : "views/prescription/prescriptionUpdate.html"
        })
        .when("/viewprescription", {
            templateUrl : "views/prescription/prescriptionView.html"
        })
        .when("/prescriptionadd", {
            templateUrl : "views/prescription/prescriptionAdd.html"
        })
        .when("/addinvoice", {
            templateUrl : "views/invoice/invoiceAdd.html"
        })
        .when("/invoiceview/:id", {
            templateUrl : "views/invoice/invoiceUpdate.html"
        })
        .when("/viewinvoice", {
            templateUrl : "views/invoice/invoiceView.html"
        })
        .when("/invoiceadd", {
            templateUrl : "views/invoice/invoiceAdd.html"
        })
        .otherwise({
            template : "http://localhost:3000"
        });
});