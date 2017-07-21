'use strict';

angular.module('myApp.landing-page', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/success', {
            templateUrl: 'landing-page/landing-page.html'
        });
    }])