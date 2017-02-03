/**
 * Created by agrima on 6/14/16.
 */
(function() {

    angular.module('service', [])
        .service('MovieService', MovieService);

    function MovieService($http) {
        var service = this;
        service.getMovies = getMovies;

        function getMovies() {

            return $http.get('/MovieFlix/movielist.json')
                .then(function(res) {
                    return res.data;
                });


        }

    }

})();