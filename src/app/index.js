'use strict';

angular.module('materialStyleGuide', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial'])
  // UI Router
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  // ngMaterial Theme
  .config(function ($mdThemingProvider) {
  	$mdThemingProvider.theme('default')
	    .primaryPalette('red')
	    .accentPalette('pink')
	    .backgroundPalette("grey");
  })

;
