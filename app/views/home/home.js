/**
 * Created by Marius.Hoppe on 12.02.2016.
 */

angular
    .module('angular-workshop.view.home', [
        'ngRoute',
        'angular-workshop.view.page_one',
        'angular-workshop.view.page_two',
        'angular-workshop.view.include_test'
    ])

    .config(['$routeProvider','weatherProvider', function ($routeProvider,weatherProvider) {
        $routeProvider.when('/home',
            {
                templateUrl: 'views/home/home.html',
                controller: 'HomeCtrl'
            }
        );

        weatherProvider.setAppId('8a5f2790ba70d702203598607e1afe2d');
        weatherProvider.configure({
            lang:'de',
            q:'34434,de',
            units:'metric'
        })
    }])

    .controller('HomeCtrl', function ($scope,$rootScope,$http,$location) {



        $scope.openUrl = function (url,id) {
            $location.url(url+'/'+id);
        };






    });

