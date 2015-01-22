exampleTwoModule = angular.module('exampleTwoModule', []);

exampleTwoModule.run(function(dataService) {
  var configObject = {
      moduleName: 'ExampleTwo',
      basePath: '/#/example_two'
  };

  exampleTwoModule.configuration = configObject;
  dataService.moduleList.push(configObject);
});

exampleTwoModule.controller('ExampleTwoController', function ($scope, dataService) {
  $scope.dataService  = dataService;
  $scope.name         = "ExampleTwo";

  $scope.exampleFunction = function() {
    return 'put some code here!'
  }
});
