/**
 * Created by ashani on 7/1/2017.
 */
angular.module("myApp").controller('invoiceController',['$scope','$http','$routeParams','$location',function ($scope,$http,$routeParams,$location) {

    $scope.insertinvoicedata=function () {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/newinvoice',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'InvoiceNo': $scope.InvoiceNo,
                'PatientName': $scope.PatientName,
                'PatientTelephone': $scope.PatientTelephone,
                'Date': $scope.Date,
                'Time': $scope.Time,
                'Amount': $scope.Amount,
                'Status': $scope.Status
            }
        }).then(function (success) {
            $scope.invoice = success.data;
            $scope.getinvoicesucessmsg ='Successfully';
            $scope.showAlert();
        }, function (error) {
            $scope.getinvoicesucessmsg ='Something Went Wrong!!!!';
            $scope.showAlert();
        });
    };

    $scope.showAlert = function(){
        $scope.mytrue = false;
        $scope.myfalse = false;
        console.log($scope.getinvoicesucessmsg);
        if($scope.getinvoicesucessmsg=="Successfully")
            $scope.mytrue = true;
        else if($scope.getinvoicesucessmsg=="Something Went Wrong!!!!")
            $scope.myfalse = true;
    };

    $http({
        method: 'GET',
        url: 'http://localhost:3000/newinvoice'
    }).then(function (success){
        $scope.invoicedata=success.data;
    },function (error){

    });

    $http({
        method: 'GET',
        url: 'http://localhost:3000/newinvoice/'+$routeParams.id
    }).then(function (success) {
        $scope.invoicedataspecific = success.data[0];
    }, function (error) {

    });

    $scope.updatedata=function () {
        $http({
            method: 'PUT',
            url: 'http://localhost:3000/newinvoice/'+$routeParams.id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'InvoiceNo': $scope.invoicedataspecific.InvoiceNo,
                'PatientName': $scope.invoicedataspecific.PatientName,
                'PatientTelephone': $scope.invoicedataspecific.PatientTelephone,
                'Date': $scope.invoicedataspecific.Date,
                'Time': $scope.invoicedataspecific.Time,
                'Amount': $scope.invoicedataspecific.Amount,
                'Status': $scope.invoicedataspecific.Status
            }
        }).then(function (success) {
            $scope.invoice = success.data[0];
            $scope.getinvoicesucessmsg ='Successfully';
            $scope.showAlert();
        }, function (error) {
            $scope.getinvoicesucessmsg ='Something went wrong';
            $scope.showAlert();
        });
    };

    $scope.deletedata=function () {
        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/newinvoice/'+$routeParams.id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'InvoiceNo': $scope.InvoiceNo,
                'PatientName': $scope.PatientName,
                'PatientTelephone': $scope.PatientTelephone,
                'Date': $scope.Date,
                'Time': $scope.Time,
                'Amount': $scope.Amount,
                'Status': $scope.Status
            }
        }).then(function (success) {
            $scope.invoice = success.data[0];
            $scope.getinvoicesucessmsg ='Successfully';
            $scope.showAlert();
            $location.path('/viewinvoice');
        }, function (error) {
            $scope.getinvoicesucessmsg ='Something Went Wrong!!!!';
            $scope.showAlert();
        });
    };

}]);

