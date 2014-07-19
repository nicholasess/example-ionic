angular.module('directory', ['ionic', 'directory.services', 'directory.controllers'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app-index', {
                url: '/index',
                templateUrl: 'templates/index.html',
                controller: 'IndexCtrl'
            })

            .state('app-detail', {
                url: '/details/:id',
                templateUrl: 'templates/detail.html',
                controller: 'DetailCtrl'
            })
        $urlRouterProvider.otherwise('/index');
    });
