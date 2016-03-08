# angular workshop 17.02.16
# wetter app 

## ablauf

1. neues angular projekt
2. bower install
3. ordnerstruktur anpassen 
4. views erstellen -> home,weather,custom-weather
5. home -> navi array[id,name,url] -(in app.js per run auf $rootScope)
6. openUrl()
7. routing -> app.js (.otherwise) ansonsten per view mit .when
8. components -> weather/weather.js module
	--1. provider
	--2. config -> interceptor -> request: if (indexof) url+= ?APPID
	--3. factory -> getWeather() return promise
9. weather-view: weatherData -> table -> (key,value)repeat in weatherData.main
10. ngmap (bower install ngmap --save)
11. weather-view: <ng-map center="[lat,lon]">
12. evtl custom-weather
13. animation anchor