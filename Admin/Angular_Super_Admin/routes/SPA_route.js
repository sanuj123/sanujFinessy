app.config(function($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode(true);
    
    $routeProvider.when("",{
        templateUrl: "AdminDashboard.html"
    }).when("/university",{
        templateUrl: "ReadUniversity.html",
        controller: "universityReadController"
    }).when("/country",{
        templateUrl: "ReadCountry.html",
        controller: "countryReadController"
    }).when("/program",{
        templateUrl: "ReadProgram.html",
        controller: "programReadController"
    }).when("/addUniversity",{
        templateUrl: "AddUniversity.html",
        controller: "universityAddController"
    }).when("/addCountry",{
        templateUrl: "AddCountry.html",
        controller: "countryAddController"
    }).when("/addProgram",{
        templateUrl: "AddProgram.html",
        controller: "programAddController"
    }).otherwise({template: "error", redirectTo:""});
    
    
});