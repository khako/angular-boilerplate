import 'normalize.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './app.config.js';

import 'lodash';

/* Components */
import Common from './common/common';
import Components from './components/components';
import appComponent from './app.component';
import appController from './app.controller';

angular
  .module('app', [uiRouter, Common, Components])
  .config(config)
  .run(function($anchorScroll, $rootScope) {
    'ngInject';
    $anchorScroll.yOffset = 100;
    $rootScope.loadAsset = function(image) {
      return require('assets/' + image);
    };
  })
  .controller('appController', appController)
  .component('app', appComponent);

angular.bootstrap(document.getElementsByTagName('html'), ['app']);
