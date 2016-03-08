'use strict';

angular.module('angular-workshop', [
    'ngRoute',
    'ngAnimate',
    'ngMap',
    'angular-workshop.view.home'

])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});




    }])

    .run(function ($rootScope) {
        $rootScope.navi = [
            {id: '1', name: 'Seite1', url: 'page_one'},
            {id: '2', name: 'Seite2', url: 'page_two'},
            {id: '3', name: 'Include Test', url: 'include_test'}

        ];
    });

