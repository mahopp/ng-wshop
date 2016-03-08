/**
 * Created by Marius.Hoppe on 12.02.2016.
 */

angular
    .module('angular-workshop.view.page_one', [
        'ngRoute',
        'angular-workshop.weather'
    ])

    .config(['$routeProvider','weatherProvider', function ($routeProvider,weatherProvider) {
        $routeProvider.when('/page_one/:id',
            {
                templateUrl: 'views/page_one/page_one.html',
                controller: 'PageOneCtrl'
            }
        );



    }])

    .controller('PageOneCtrl', function ($scope,$rootScope,$http,weatherService,$routeParams,NgMap) {
        console.log($routeParams);
        var index = parseInt($routeParams.id, 10);
        $scope.navPage = $rootScope.navi[index - 1];


        NgMap.getMap().then(function(map) {
            console.log(map.getCenter());
        });


        weatherService.getWeather().then(function(res){
            console.log(res);
            $scope.weather = res.data;
        });

    });

