angular.module('directory.services', [])

    .factory('Service', function($q) {

        var listas = [
        { "id": 1, "name": "Introdução", "description": "Introdução" },
        { "id": 2, "name": "Aplicação Básica", "description": "Aplicação Básica" },
        { "id": 3, "name": "Filters", "description": "Aplicação Básica" },
        { "id": 4, "name": "Core Directives", "description": "Aplicação Básica" },
        { "id": 5, "name": "Form Directives", "description": "Aplicação Básica" },
        { "id": 6, "name": "Display Directives", "description": "Aplicação Básica" },
        { "id": 7, "name": "Events Directives", "description": "Aplicação Básica" },
        { "id": 8, "name": "API", "description": "Aplicação Básica" },
        { "id": 9, "name": "Services", "description": "Aplicação Básica" },
        { "id": 10, "name": "Testing", "description": "Aplicação Básica" }
        ];

        return {
            findAll: function() {
                var deferred = $q.defer();
                deferred.resolve(listas);
                return deferred.promise;
            },

            findById: function(id) {
                var deferred = $q.defer();
                var item = listas[id - 1];
                deferred.resolve(item);
                return deferred.promise;
            }
        }

    });