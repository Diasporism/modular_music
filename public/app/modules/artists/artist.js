exampleOneModule = angular.module('exampleOneModule', []);

exampleOneModule.run(function(dataService) {
  var configObject = {
      moduleName: 'ExampleOne',
      basePath: '/#/example_one'
  };

  exampleOneModule.configuration = configObject;
  dataService.moduleList.push(configObject);
});

exampleOneModule.controller('ExampleOneController', function ($scope, dataService) {
  $scope.dataService  = dataService;
  $scope.name         = "ExampleOne";

  $scope.exampleFunction = function() {
    return 'put some code here!'
  }
});
