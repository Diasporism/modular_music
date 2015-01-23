coreModule = angular.module('coreModule', ['ngResource', 'ngRoute', 'ngAnimate']);

coreModule.service('dataService', function() {
  dataService = {
    moduleList: [],
    currentModule: null,
    globalData: "I'm available to all the modules, but I don't pollute the Global Namespace!"
  };

  dataService.getModuleDefinition = function(name) {
    for(var i = 0; i < dataService.moduleList.length; i++) {
      if(dataService.moduleList[i].moduleName.toLowerCase() == name.toLowerCase()) {
        return dataService.moduleList[i];
      }
    }

    return null;
  }

  dataService.hasModuleLoaded = function(name) {
    for(var i = 0; i < dataService.moduleList.length; i++) {
      if(dataService.moduleList[i].moduleName.toLowerCase() == name.toLowerCase()) {
        return true;
      }
    }

    return false;
  }

  return dataService;
});

coreModule.config(function ($routeProvider) {
  $routeProvider
    .when('/:module/:page', {
        templateUrl: function(params) {
            var basePath = "/app/modules/" + params.module.toLowerCase() + "/views/";
            var path = basePath + "show.html";
            return path;
        }
    })
    .when('/:module', {
        templateUrl: function(params) {
          if(params.module.toLowerCase() == "home") {
            return "/home.html";
          }
          else {
            var basePath = "/app/modules/" + params.module.toLowerCase() + "/views/";
            var path = basePath + "index.html";
            return path;
          }
        }
    })
    .otherwise({redirectTo: '/home'});
});


coreModule.run(function(dataService) {
  var configObject = {
      moduleName: "Home",
      basePath: "/#/home"
  };

  dataService.moduleList.unshift(configObject);
});


coreModule.controller('RouteController', function ($scope, $location, $timeout, dataService) {
  $scope.dataService = dataService;
  $scope.dataService.currentPage = "";

  $scope.init = function() {
    dataService.viewReady = true;
  }

  $scope.$on('$locationChangeStart', function(event, next, current) {
    var path = $location.path();
    console.log("Route " + path+ " requested");
  });

  $scope.$on('$routeChangeError', function (event, args) {
    var path = $location.path();
    console.log("Route " + path + " not found !");
  });

  $scope.$on('$locationChangeSuccess', function () {
    var path = $location.path();
    path = path.substring(1, path.length);
    console.log("route Loaded: " + path);

    var module = path.split("/")[0];

    dataService.currentModule = module;
  });
});



