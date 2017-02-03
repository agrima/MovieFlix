/**
 * Created by agrima on 6/14/16.
 */
(function() {

    angular.module('app')
        .controller('MainController', MainController);

    function MainController() {

        var mainVm = this;
        mainVm.clicked = function () {

            window.location = "/MovieFlix/catalog.html";
        }
        mainVm.clickMe = function () {

            window.location = "/MovieFlix/signup.html";
        }
        mainVm.clickIn = function () {

            window.location = "/MovieFlix/signin.html";
        }
    }


})();