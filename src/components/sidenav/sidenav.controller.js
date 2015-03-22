'use strict';

angular.module('materialStyleGuide')
  .controller('SidenavCtrl', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll){

      $scope.scrollTo = function(loc) {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash(loc);

        // call $anchorScroll()
        $anchorScroll();
      };

  }]);


