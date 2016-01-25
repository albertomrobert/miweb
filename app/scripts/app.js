'use strict';

/**
 * @ngdoc overview
 * @name miwebApp
 * @description
 * # miwebApp
 *
 * Main module of the application.
 */
angular
  .module('miwebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/inicio.html',
        controller: 'InicioCtrl',
        controllerAs: 'inicio'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contacto'
      })
      .when('/clientes', {
        templateUrl: 'views/clientes.html',
        controller: 'ClientesCtrl',
        controllerAs: 'clientes'
      })
      .when('/redes_sociales', {
        templateUrl: 'views/redes_sociales.html',
        controller: 'RedesSocialesCtrl',
        controllerAs: 'redesSociales'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
