/**
 * Created by ashani on 5/7/2017.
 */

angular.module("myApp").controller('supplierController',['$scope','$http',function ($scope,$http) {

    $http({
        method: 'GET',
        url: 'http://localhost:3000/newsupplier'
    }).then(function (success){
        $scope.userdata=success.data;
    },function (error){

    });

    $scope.insertdata=function () {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/newsupplier',
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
            $scope.stat = success.data;
        }, function (error) {

        });
    };
}]);


