'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('MainCtrl', function ($scope) {

  	var baseURL = 'http://lorempixel.com/1000/250/';
  	$scope.setInterval = 5000;

  	$scope.slides = [
  		{
  			title: 'Título 1',
  			image: baseURL + 'business/',
  			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis consequuntur dolorem sequi officia soluta praesentium.'
  		},
  		{
  			title: 'Título 2',
  			image: baseURL + 'city/',
  			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis consequuntur dolorem sequi officia soluta praesentium.'
  		},
  		{
  			title: 'Título 3',
  			image: baseURL + 'nightlife',
  			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis consequuntur dolorem sequi officia soluta praesentium.'
  		}
  	];


    
  });
