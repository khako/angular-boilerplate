export default function config($locationProvider, $urlRouterProvider) {
  'ngInject';
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true).hashPrefix('!');
}
