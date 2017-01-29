import angular from 'angular';
import Navbar from './navbar/navbar';
import Fouteur from './fouteur/fouteur';

let commonModule = angular.module('app.common', [
  Navbar,
  Fouteur
])

.name;

export default commonModule;
