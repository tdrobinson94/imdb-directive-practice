function MovieCard() {

  return {
    restrict: 'E',

    scope: {
      name: '@'
    },

    templateUrl: 'templates/movie-card.tpl.html',
    controller: function($http, $scope) {
      let vm = this;
      $http.get('http://www.omdbapi.com/?'  + `i=${$scope.name}`).then(function(res){
        vm.movieposter = res.data;
        console.log(res);;
      });
    },
    link: function (scope, element, attrs){
      element.on('click', function() {
        alert(attrs.name);
      });
    },
    controllerAs: 'vm'
  };
}


MovieCard.$inject = [];

export { MovieCard } ;
