/**
 * Created by Marius.Hoppe on 12.02.2016.
 */

angular
    .module('angular-workshop.view.page_two', [
        'ngRoute',
        'angular-workshop.weather'
    ])

    .config(['$routeProvider', 'weatherProvider', function ($routeProvider, weatherProvider) {
        $routeProvider.when('/page_two/:id',
            {
                templateUrl: 'views/page_two/page_two.html',
                controller: 'PageTwoCtrl'
            }
        );

        weatherProvider.setAppId('8a5f2790ba70d702203598607e1afe2d');
        weatherProvider.configure({
            units: 'metric'
        })
    }])

    .controller('PageTwoCtrl', function ($scope, $rootScope, $http, weatherService, $routeParams,weather,NgMap) {
        console.log($routeParams);
        var index = parseInt($routeParams.id, 10);
        $scope.navPage = $rootScope.navi[index - 1];

        NgMap.getMap().then(function(map) {
            console.log(map.getCenter());
        });


        $scope.currentZip = weather.getParams().q;


        $scope.refreshWeather = function(){
            weatherService.getWeatherByZip($scope.currentZip).then(function (res) {
                console.log(res);
                $scope.weather = res.data;
            });
        };

        $scope.refreshWeather();



    });


/*

 8a5f2790ba70d702203598607e1afe2d

 */
