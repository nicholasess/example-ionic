angular.module('directory.controllers', [])
    .controller('IndexCtrl', function ($scope, Service) {

        $scope.clearSearch = function () {
            $scope.searchKey = "";
            findAlllistas();
        }

        $scope.search = function () {
            Service.findByName($scope.searchKey).then(function (listas) {
                $scope.lista = listas;
            });
        }

        $scope.findAll = function() {
            Service.findAll().then(function (lista) {
                $scope.lista = lista;
            });
        }

        $scope.findAll();
    })

    .controller('DetailCtrl', function ($scope, $stateParams, Service) {
        Service.findById($stateParams.id).then(function(item) {
            $scope.item = item;
        });
    })
