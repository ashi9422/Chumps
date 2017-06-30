/**
 * Created by ashani on 6/28/2017.
 */

angular.module("myApp").controller('drugController',['$scope','$http','$routeParams','$location',function ($scope,$http,$routeParams,$location) {

    $scope.insertdrugdata=function () {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/newdrug',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'itemName': $scope.itemName,
                'batchNo': $scope.batchNo,
                'packingType': $scope.packingType,
                'manufacturer': $scope.manufacturer,
                'quantity': $scope.quantity,
                'addedDate': $scope.addedDate,
                'expiryDate': $scope.expiryDate,
                'sellingPrice': $scope.sellingPrice
            }
        }).then(function (success) {
            console.log($scope.drug);
            $scope.drug = success.data;
            $scope.getdrugsucessmsg ='Successfully';
            $scope.showAlert();
        }, function (error) {
            $scope.getdrugsucessmsg ='Something Went Wrong!!!!';
            $scope.showAlert();
        });
    };

    $scope.showAlert = function(){
        $scope.mytrue = false;
        $scope.myfalse = false;
        console.log($scope.getdrugsucessmsg);
        if($scope.getdrugsucessmsg=="Successfully")
            $scope.mytrue = true;
        else if($scope.getdrugsucessmsg=="Something Went Wrong!!!!")
            $scope.myfalse = true;
    };

    $http({
        method: 'GET',
        url: 'http://localhost:3000/newdrug'
    }).then(function (success){
        $scope.drugdata=success.data;
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
        url: 'http://localhost:3000/newdrug/'+$routeParams.id
    }).then(function (success) {
        $scope.drugdataspecific = success.data[0];
    }, function (error) {

    });

    $scope.updatedata=function () {
        $http({
            method: 'PUT',
            url: 'http://localhost:3000/newdrug/'+$routeParams.id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'itemName': $scope.drugdataspecific.itemName,
                'batchNo': $scope.drugdataspecific.batchNo,
                'packingType': $scope.drugdataspecific.packingType,
                'manufacturer': $scope.drugdataspecific.manufacturer,
                'quantity': $scope.drugdataspecific.quantity,
                'addedDate': $scope.drugdataspecific.addedDate,
                'expiryDate': $scope.drugdataspecific.expiryDate,
                'sellingPrice': $scope.drugdataspecific.sellingPrice
            }
        }).then(function (success) {
            $scope.drug = success.data[0];
            $scope.getdrugsucessmsg ='Successfully';
            $scope.showAlert();
        }, function (error) {
            $scope.getdrugsucessmsg ='Something went wrong';
            $scope.showAlert();
        });
    };

    $scope.deletedata=function () {
        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/newdrug/'+$routeParams.id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'itemName': $scope.itemName,
                'batchNo': $scope.batchNo,
                'packingType': $scope.packingType,
                'manufacturer': $scope.manufacturer,
                'quantity': $scope.quantity,
                'addedDate': $scope.addedDate,
                'expiryDate': $scope.expiryDate,
                'sellingPrice': $scope.sellingPrice
            }
        }).then(function (success) {
            $scope.supplier = success.data[0];
            $scope.getdrugsucessmsg ='Successfully';
            $scope.showAlert();
            $location.path('/viewdrug');
        }, function (error) {
            $scope.getdrugsucessmsg ='Something Went Wrong!!!!';
            $scope.showAlert();
        });
    };

}]);


