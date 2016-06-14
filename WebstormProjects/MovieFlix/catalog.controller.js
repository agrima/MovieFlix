/**
 * Created by agrima on 6/14/16.
 */
(function() {

    angular.module('app2')
        .controller('CatalogController', CatalogController);

    //CatalogController.$inject = ['$location'];
    function CatalogController(MovieService) {

        var catalogVm = this;

        catalogVm.clicked = function () {
            //var path = $location.path(/MovieFlix/signin.html);
            //console.log(path);
           window.location = "/MovieFlix/signin.html";
        }
        MovieService.getMovies()
            .then(function(res){
                "use strict";
                catalogVm.movies = res;
            });
    }

})();