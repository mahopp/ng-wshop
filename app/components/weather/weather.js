'use strict';

angular.module('angular-workshop.weather', [])

    .provider('weather', function () {
        var appId = {};
        var config = {};

        this.setAppId = function(aid){
            appId = aid;
            return appId;
        };
        this.configure = function (params) {
            angular.extend(config, params);
            return config;
        };
        this.$get = function(){
            return {
                getParams:function(){
                    return config;
                },
                getAppId:function(){
                    return appId;
                }
            }

        }
    })

    .config(['$httpProvider', function ($httpProvider) {

        function weatherInterceptor($q, $rootScope, weather) {

            return {
                request: function (config) {
                    console.log(config);
                    if (config.url.indexOf('api.openweathermap.org')>0){
                        config.url += '?APPID='+weather.getAppId();
                        var weatherParams = weather.getParams();
                        if (config.params != undefined){
                            angular.extend(weatherParams, config.params);
                        }
                        for (var key in weatherParams){
                            config.url += '&'+key+'='+weatherParams[key];
                        }
                    }
                    return config;
                }

            }
        }

        $httpProvider.interceptors.push(weatherInterceptor);
    }])

    .factory('weatherService', function ($http) {
        var fac = {};

        fac.getWeather = function(){
            return $http.get('http://api.openweathermap.org/data/2.5/weather');
        };

        fac.getWeatherByZip = function(zipCode){
            return $http.get('http://api.openweathermap.org/data/2.5/weather',{params:{q:zipCode}});
        };

        return fac;
    });
