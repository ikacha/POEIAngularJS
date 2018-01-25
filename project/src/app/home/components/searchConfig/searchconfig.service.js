(function() {
    'use strict';
  
    function searchConfig() {
      var service = {};
      service.ingredient = '';

      return service;
    }

    searchConfig.$inject = [];
    
    angular.module('daproject')
        .factory('searchConfig', searchConfig);
  
})();



/*    vm.click = click;
    var ingredient;
    vm.ingredient = null;
    function click (index){
      vm.ingredient = vm.ingredient[index];
