albumsModule = angular.module('albumsModule', []);

albumsModule.run(function(dataService) {
  var configObject = {
      moduleName: 'AlbumsModule',
      basePath: '/#/albums'
  };

  albumsModule.configuration = configObject;
  dataService.moduleList.push(configObject);
});

albumsModule.controller('AlbumsController', function ($scope, dataService) {
  $scope.dataService = dataService;
  $scope.name        = "Albums";

  $scope.fetchAlbums = function() {
    return {
      albums: [
        {
          artist: 'Bonobo',
          title: 'Black Sands'
        },
        {
          artist: 'Justin Bieber',
          title: 'Some shitty album name here'
        }
      ]
    }
  }
});
