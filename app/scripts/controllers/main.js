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

    /* Carousel */

    var slides = $scope.slides = [];
    var newWidth = 1200 + slides.length;
    var baseURL = 'http://lorempixel.com/'+ newWidth +'/300/city/';

    $scope.setInterval = 1500;

    $scope.slides = [
      {
        image: baseURL + '1',
      },
      {
        image: baseURL + '2',
      },
      {
        image: baseURL + '3',
      }
    ];

    /* MixItUp */

    $('#mixIt').mixItUp();



    /* Modal Windows info */
  
  var imgSRC = ""; 

  $('article').on('click', function(){
    imgSRC = $(this).find('img').attr('src');

    modalInfo($(this),imgSRC);

  });

    
    var modalInfo = function(elemento,texto){
      
     
    //Variables para el texto del párrafo en el modal

    var imageTitle = elemento.find('h4');
    $('.modal-title').find('h4').text(imageTitle);
    $('.modal-body').find('img').attr('src', imageTitle);     
    
    //Condicional para cargar textos en la ventana modal
    if(imgSRC == texto){  
      $('.modal-header p').text(eval(texto));
    } else {
      $('.modal-header p').text("");
    }
    };

});

