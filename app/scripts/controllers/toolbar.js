'use strict';

/**
 * @ngdoc function
 * @name nisrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nisrApp
 */
angular.module('nisrApp')
  .controller('ToolBarCtrl', function ($scope, $state) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.goToMenu = function() {
    	console.log('menu clicked');
      $state.go('home.menu');
    };

    $scope.goToHome = function() {
    	console.log('Home clicked');
      $state.go('home');
    };

    $scope.goToContacts = function() {
    	console.log('Home clicked');
      $state.go('home.contacts');
    };

  });
