// this is our service module depending on "ngResource" module:
services_module = angular.module('searchServices', ['ngResource']);

// and here's the definition of "duckDuckGoService":
services_module.factory( // again the definitio resembles a controller definition - see controllers.js for detals
    'duckDuckGo',
    [
        '$resource',
        function($resource) {
            // we define a REST resource:
            return $resource(
                'http://api.duckduckgo.com/?format=json&q=:q', // this is a URL; please note the "q" parameter!
                { callback: 'JSON_CALLBACK' }, // this is configuration only
                { ask: { method: 'JSONP' } } // we define only one method here named "ask"
                // there's way more to that - to understand in detail please check AngularJS docs.
            );
        }
    ]
);

// we could use low-level $http in controller instead but using services has its advantages, primarily:
// - they're separate - you can change them without any knowledge how controllers work
// - they can provide a full set of REST methods - we're defining only one here but it is just a simple example.

