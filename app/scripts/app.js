'use strict';

/**
 * @ngdoc overview
 * @name nisrApp
 * @description
 * # nisrApp
 *
 * Main module of the application.
 */
angular
  .module('nisrApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
  ])
  .config(function ($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        views: {
          'header': {
            templateUrl: '/views/toolbar_partial.html',
            controller: 'ToolBarCtrl'
          },
          'container@': {
            templateUrl: '/views/main.html',
            //should use separate controller
            controller: 'ToolBarCtrl'
          }
        }
      })
      .state('home.menu', {
        url: 'menu',
        views: {
          'container@': {
            templateUrl: '/views/menu.html',
            //should use separate controller
            controller: 'ToolBarCtrl'
          },
          'sideMenuContainer@' : {
            templateUrl: '/views/side_menu_partial.html',
            controller: 'ToolBarCtrl'
          }
        }
      })
      .state('home.contacts', {
        url: 'contacts',
        views: {
          'container@': {
            templateUrl: '/views/contacts.html',
            controller: 'ToolBarCtrl'
          }
        }
      });
      // .state('home.search', {
      //   url: '/search',
      //   onEnter: function(){

      //   },
      //   views: {
      //     'container@': {
      //       templateUrl: '/views/search.html',
      //       controller: 'ToolBarCtrl'
      //     }
      //   }
      // })
  });

