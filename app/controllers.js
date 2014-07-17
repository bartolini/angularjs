// This is our app:
// it is named 'duckDuckGoSearch' and the name must match the ng-app attribute;
// it also depends from other modules - ['searchFilters', 'searchServices', 'ngAnimate']
// you have to remember to include the corresponding javascript files!
app = angular.module('duckDuckGoSearch', ['searchFilters', 'searchServices', 'ngAnimate']);

// and this is definition of the "SearchController" of the app:
app.controller(
    'SearchController',
    // please note as a second parameter we're passing an array!
    [
        // this is for dependency injector so it knows which services is the controller dependent on
        '$scope', 'duckDuckGo', // note the $scope! also - all angular specific varables are named in $name pattern.
        // and this is controller - the arguments must correspond to what's defined above to be injected!
        function($scope, duckDuckGo) {
            // variables initialization - this can be done in html as well by using ng-init:
            $scope.results = [];
            $scope.easter_egg_class = '';

            // that's our callback for loading results:
            $scope.reload_results = function(query) {

                // please ignore these next 10 lines ;)
                if (query.toLowerCase() === 'do a barrel roll') {
                    $scope.easter_egg_class = 'do_a_roll';
                    $scope.query = '';
                    return;
                } else if (query.toLowerCase() === 'bounce') {
                    $scope.easter_egg_class = 'do_a_bounce';
                    $scope.query = '';
                    return;
                }
                $scope.easter_egg_class = '';

                // now we're ready to use duckDuckGo service (it's defined in 'app/services.js so have a look!):
                duckDuckGo.ask({q: query}).$promise.then(
                    function(data) {
                        // this is simple:
                        $scope.results = data.RelatedTopics; // these are the results to show
                        $scope.query = data.Heading; // we'll update the header and input box to whatever is returned
                    }
                );

                // note this is a webservice and note the returned $promise object.
                // at the moment of executing it we don't know what's returned as we are calling an
                // external api; the $promise object allows code executing as soon as the results are
                // ready (api has responded with some data in our case).
            };
        }
    ]
);

// Please note when defining the controller as a second parameter we're passing an array.
// We also could pass the controller itself ommiting data for dependency injector and it would work
// perfectly as well because AngularJS can guess what services we need ($scope and duckDuckGo in this case).
// Problems would start after minifying this code - $scope and duckDuckGo could be change to something
// meaningless and dependency injection wouldn't work any more. The code written like above prevents such a situation.

// now see app/filters.js for the star modifier
// and app/services.js for the duckDuckGo service.
