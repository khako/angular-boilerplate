class AppController {
  constructor($rootScope) {
    this.name = 'ccommon';
    $rootScope.$on('$stateChangeStart', function() {
      console.log('start');
    });

    $rootScope.$on('$stateChangeSuccess', function() {
      console.log('success');
    });
  }

  loadAsset(image) {
    return require('assets/' + image);
  }

}

export default AppController;
