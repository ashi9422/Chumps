/**
 * Created by ashani on 6/28/2017.
 */

angular.module("myApp").controller('drugOrderController',['$scope','$http','$routeParams','$location',function ($scope,$http,$routeParams,$location) {

    $scope.insertdrugorderdata=function () {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/newdrugorder',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'drugname': $scope.drugname,
                'quantity': $scope.quantity,
                'supplier': $scope.supplier,
                'orderdate': $scope.orderdate,
                'status': $scope.status
            }
        }).then(function (success) {
            console.log($scope.supplier);
            $scope.drugorder = success.data;
            $scope.getdrugordersucessmsg ='Successfully';
            $scope.showAlert();
        }, function (error) {
            $scope.getdrugordersucessmsg ='Something Went Wrong!!!!';
            $scope.showAlert();
        });
    };

    $scope.showAlert = function(){
        $scope.mytrue = false;
        $scope.myfalse = false;
        console.log($scope.getdrugordersucessmsg);
        if($scope.getdrugordersucessmsg=="Successfully")
            $scope.mytrue = true;
        else if($scope.getdrugordersucessmsg=="Something Went Wrong!!!!")
            $scope.myfalse = true;
    };

    $http({
        method: 'GET',
        url: 'http://localhost:3000/newdrugorder'
    }).then(function (success){
        $scope.drugorderdata=success.data;
    },function (error){

    });

    // $http({
    //     method: 'GET',
    //     url: 'http://localhost:3000/newsup'
    // }).then(function (success){
    //     $scope.supplierdata=success.data;
    // },function (error){
    //
    // });

    $http({
        method: 'GET',
        url: 'http://localhost:3000/newdrugorder/'+$routeParams.id
    }).then(function (success) {
        $scope.drugorderdataspecific = success.data[0];
    }, function (error) {

    });

    $scope.updatedata=function () {
        $http({
            method: 'PUT',
            url: 'http://localhost:3000/newdrugorder/'+$routeParams.id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'drugname': $scope.drugorderdataspecific.drugname,
                'quantity': $scope.drugorderdataspecific.quantity,
                'supplier': $scope.drugorderdataspecific.supplier,
                'orderdate': $scope.drugorderdataspecific.orderdate,
                'status': $scope.drugorderdataspecific.status
            }
        }).then(function (success) {
            $scope.drugorder = success.data[0];
            $scope.getdrugordersucessmsg ='Successfully';
            $scope.showAlert();
        }, function (error) {
            $scope.getdrugordersucessmsg ='Something went wrong';
            $scope.showAlert();
        });
    };

    $scope.deletedata=function () {
        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/newdrugorder/'+$routeParams.id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'drugname': $scope.drugname,
                'quantity': $scope.quantity,
                'supplier': $scope.supplier,
                'orderdate': $scope.orderdate,
                'status': $scope.status
            }
        }).then(function (success) {
            $scope.supplier = success.data[0];
            $scope.getdrugordersucessmsg ='Successfully';
            $scope.showAlert();
            $location.path('/viewdrugorder');
        }, function (error) {
            $scope.getdrugordersucessmsg ='Something Went Wrong!!!!';
            $scope.showAlert();
        });
    };

}]);

