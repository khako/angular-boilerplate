import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])
.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('home', {
      component: 'home',
      url: '/'
    });
})
.component('home', homeComponent)
.name;

export default homeModule;
