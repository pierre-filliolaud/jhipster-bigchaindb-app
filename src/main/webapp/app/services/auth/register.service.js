(function () {
    'use strict';

    angular
        .module('bigchaindbjhipsterApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
