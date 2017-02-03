(function() {

    angular.module('app2')
        .controller('CatalogController', CatalogController);
    CatalogController.$inject = ['MovieService', '$filter']
    function CatalogController(MovieService, $filter) {

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
                //return res.data;
            });
        catalogVm.sort =function (mov) {
            catalogVm.sortValue = mov;
        }

        catalogVm.filteredText = function(val){
            "use strict";
            catalogVm.text = $filter(val);

        }

        }

})();