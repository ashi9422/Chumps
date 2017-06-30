/**
 * Created by ashani on 5/7/2017.
 */

angular.module("myApp").controller('prescriptionController',['$scope','$http','$routeParams','$location',function ($scope,$http,$routeParams,$location) {

    $scope.insertprescriptiondata=function () {
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
            $scope.getprescriptionsucessmsg ='Successfully';
            $scope.showAlert();
        }, function (error) {
            $scope.getprescriptionsucessmsg ='Something Went Wrong!!!!';
            $scope.showAlert();
        });
    };

    $scope.showAlert = function(){
        $scope.mytrue = false;
        $scope.myfalse = false;
        console.log($scope.getprescriptionsucessmsg);
        if($scope.getprescriptionsucessmsg=="Successfully")
            $scope.mytrue = true;
        else if($scope.getprescriptionsucessmsg=="Something Went Wrong!!!!")
            $scope.myfalse = true;
    };

    $http({
        method: 'GET',
        url: 'http://localhost:3000/newprescription'
    }).then(function (success){
        $scope.prescriptiondata=success.data;
    },function (error){

    });

    $http({
        method: 'GET',
        url: 'http://localhost:3000/newprescription/'+$routeParams.id
    }).then(function (success) {
        $scope.prescriptiondataspecific = success.data[0];
    }, function (error) {

    });

    $scope.updatedata=function () {
        $http({
            method: 'PUT',
            url: 'http://localhost:3000/newprescription/'+$routeParams.id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'doctorid': $scope.prescriptiondataspecific.doctorid,
                'patientid': $scope.prescriptiondataspecific.patientid,
                'name': $scope.prescriptiondataspecific.name,
                'age': $scope.prescriptiondataspecific.age,
                'date': $scope.prescriptiondataspecific.date
            }
        }).then(function (success) {
            $scope.prescription = success.data[0];
            $scope.getprescriptionsucessmsg ='Successfully';
            $scope.showAlert();
        }, function (error) {
            $scope.getprescriptionsucessmsg ='Something went wrong';
            $scope.showAlert();
        });
    };

    $scope.deletedata=function () {
        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/newprescription/'+$routeParams.id,
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
            $scope.prescription = success.data[0];
            $scope.getprescriptionsucessmsg ='Successfully';
            $scope.showAlert();
            $location.path('/viewprescription');
        }, function (error) {
            $scope.getprescriptionsucessmsg ='Something Went Wrong!!!!';
            $scope.showAlert();
        });
    };

}]);
