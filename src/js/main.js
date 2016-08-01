import angular from 'angular';


import { MovieController } from './movie.controller';
import { MovieCard } from './movie-card.directive';

angular
  .module('app', [])
  .controller('MovieController', MovieController)
  .directive('movieCard', MovieCard)
;
