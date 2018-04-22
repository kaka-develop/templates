/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('StatnlpApp.pages', [
    'ui.router',

    'StatnlpApp.pages.dashboard'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    // baSidebarServiceProvider.addStaticItem();
    // baSidebarServiceProvider.addStaticItem();
  }

})();
