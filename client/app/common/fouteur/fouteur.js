import angular from 'angular';
import uiRouter from 'angular-ui-router';
import fouteurComponent from './fouteur.component';

let fouteurModule = angular.module('fouteur', [
  uiRouter
])

.component('fouteur', fouteurComponent)

.name;

export default fouteurModule;
