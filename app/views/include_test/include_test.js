/**
 * Created by Marius.Hoppe on 12.02.2016.
 */

angular
    .module('angular-workshop.view.include_test', [
        'ngRoute'
    ])

    .config(['$routeProvider','$httpProvider', function ($routeProvider,$httpProvider) {
        $routeProvider.when('/include_test/:id',
            {
                templateUrl: 'views/include_test/include_test.html',
                controller: 'IncludeTestCtrl'
            }
        );

        function catchInterceptor($q, $rootScope) {

            return {
                request: function (config) {
                    console.log(config);
                    return config;
                }

            }
        }

        $httpProvider.interceptors.push(catchInterceptor);

    }])

    .controller('IncludeTestCtrl', function ($scope,$rootScope,$http,weatherService,$routeParams) {
        console.log($routeParams);
        var index = parseInt($routeParams.id, 10);
        $scope.navPage = $rootScope.navi[index - 1];



    });

