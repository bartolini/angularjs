// that's our filters module (it depends on ngSanitize):
filters_module = angular.module('searchFilters', ['ngSanitize']);

// and this is our "star" filter:
filters_module.filter(
    'star', // being named
    function() { // and defined:
        return function(input) {
            return '<span class="glyphicon glyphicon-star-empty"></span> ' + input;
        };
    } // there's not much beyond this going on here.
);
