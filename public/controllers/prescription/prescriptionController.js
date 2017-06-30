'use strict'

angular.module("myApp").controller('prescriptionController',['$scope','$http','$routeParams','$location',function ($scope,$http,$routeParams,$location) {

    $scope.insertsupdata=function () {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/newprescription',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'doctorid': $scope.doctorid,
                'patientid': $scope.patientid,
                'name': $scope.name,
                'age': $scope.age,
                'date': $scope.date
            }
        }).then(function (success) {
            $scope.prescription = success.data;
            $scope.getsupsucessmsg ='Successfully';
            $scope.showAlert();
        }, function (error) {
            $scope.getsupsucessmsg ='Something Went Wrong!!!!';
            $scope.showAlert();
        });
    };

    $scope.showAlert = function(){
        $scope.mytrue = false;
        $scope.myfalse = false;
        console.log($scope.getsupsucessmsg);
        if($scope.getsupsucessmsg=="Successfully")
            $scope.mytrue = true;
        else if($scope.getsupsucessmsg=="Something Went Wrong!!!!")
            $scope.myfalse = true;
    };

    $http({
        method: 'GET',
        url: 'http://localhost:3000/newsup'
    }).then(function (success){
        $scope.prescriptiondata=success.data;
    },function (error){

    });

    $http({
        method: 'GET',
        url: 'http://localhost:3000/newsup/'+$routeParams.id
    }).then(function (success) {
        $scope.supplierdataspecific = success.data[0];
    }, function (error) {

    });

    $scope.updatedata=function () {
        $http({
            method: 'PUT',
            url: 'http://localhost:3000/newsup/'+$routeParams.id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'firstname': $scope.supplierdataspecific.firstname,
                'lastname': $scope.supplierdataspecific.lastname,
                'phone': $scope.supplierdataspecific.phone,
                'email': $scope.supplierdataspecific.email,
                'address': $scope.supplierdataspecific.address
            }
        }).then(function (success) {
            $scope.supplier = success.data[0];
            $scope.getsupsucessmsg ='Successfully';
            $scope.showAlert();
        }, function (error) {
            $scope.getsupsucessmsg ='Something went wrong';
            $scope.showAlert();
        });
    };

    $scope.deletedata=function () {
        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/newsup/'+$routeParams.id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'firstname': $scope.firstname,
                'lastname': $scope.lastname,
                'phone': $scope.phone,
                'email': $scope.email,
                'address': $scope.address
            }
        }).then(function (success) {
            $scope.supplier = success.data[0];
            $scope.getsupsucessmsg ='Successfully';
            $scope.showAlert();
            $location.path('/viewsuppliers');
        }, function (error) {
            $scope.getsupsucessmsg ='Something Went Wrong!!!!';
            $scope.showAlert();
        });
    };

}]);
