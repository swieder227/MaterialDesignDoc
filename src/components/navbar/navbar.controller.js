'use strict';

angular.module('materialStyleGuide')
  .controller('NavbarCtrl', function ($scope, $mdSidenav) {

  	// Getter
  	$scope.navIsOpen = function(){
  		return $mdSidenav('sidenav-left').isOpen()
  	}

  	// Setter/Toggle
  	$scope.toggleLeftMenu = function(){
  	  $mdSidenav('sidenav-left').toggle();
  	}

  });
