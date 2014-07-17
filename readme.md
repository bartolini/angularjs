# What is this project about?

I have created this very simple project just to have a look at **AngularJS - the
Superheroic JavaScript MVW Framework** by Google. There are multiple
tutorials/courses/examples in the internet but after seeing a
few of them I have decided to do some sort of a project by myself keeping
in mind the following basics:

* Learn some **general principles** about how angularjs framework works
* Learn about the **$scope** object and how views and controllers work together
* Learn about **two-way data binding**
* Learn about **subviews**
* Learn about **event handling**
* Learn how to **create a filter/modifier**
* Learn how to **create and use services**
* Learn how to **animate things** with AngularJS but also with CSS only.

**Everything is incuded in the repo** - AngularJS and its dependencies, static files
and so on. There is no need to create the project from scratch, update dependencies
using i.e. Bower and NodeJS like in the official tutorial. It has its advantages and
I encourage you to get more familiar with it but hey - this is about AngularJS
not the NodeJS/Bower tandem here. All you need is a web server.

# What does it do?

The app provides you with a search box and after submitting entered text presents
some search results. I have decided to use an **awesome and free search engine API**
provided by [DuckDuckGo]('https://duckduckgo.com/'). It suits perfectly what is required for this project.

# How does it work?
The best way to start is as usual the index.html file and follow comments in there.
Folders are as follow:

* **/app** - the actual part you will be interested in
* **/img** - static file(s)
* **/inc** - minified angularjs files and twitter bootstrap - not much to see there.

# I don't have a web server or I don't want to install one!

Have you got [Python](https://www.python.org/) installed? Then you are sorted. If not just install python -
it is a great programming language **and** it comes with a simple webserver perfect for dev tasks or just for
playing around. Once python is installed on your system just open your console and type in:

> python -m SimpleHTTPServer

This will start a web server for you and you will be able to open project on
[http://localhost:8000/](http://localhost:8000/).

# Use a modern browser

Please note that this app will work in modern browsers only. It has been tested in Firefox and Chrome
and probably will work in recent versions of Safari, Opera and Internet Explorer as well.
Don't expect it to run in some ancient versions of IE though...

