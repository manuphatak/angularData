'use strict';

/**
 * @ngdoc function
 * @name angularDataApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularDataApp
 */
angular

  .module('angularDataApp')

  .controller('RegisterCtrl', function ($scope, $location, Authentication) {

    $scope.register = function () {
      $location.path('/meetings');
    };
  });
