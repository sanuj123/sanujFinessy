app.factory("countryReadFactory", function($http, $q){
    
    console.log("Async call 2");
    
    var object = {
        
       updateCountry: function (Country) {

            var pr = $q.defer();
            $http({

                url: location.origin+"/Finessy-Uni/unicontroller",
                method: "post",
                params: {
                    method: "update",
                    dto_obj: Country
                }
            }).then(function (data) {
                pr.resolve(data);
            }, function (er) {
                pr.reject(er);
            });
        },

        readCountry: function (Country) {

            var pr = $q.defer();
            $http({

                url: location.origin+"/Finessy-Uni/unicontroller",
                method: "post",
                params: {
                    method: "read",
                    dto_obj: Country
                }
            }).then(function (data) {
                pr.resolve(data);
            }, function (er) {
                pr.reject(er);
            });
        },

        getCountryList: function(){
            var pr = $q.defer();
            $http({
                
                url: location.origin+"/Finessy-Uni/unicontroller",
                method: "post",
                params: {
                    method: "getCountryList"
                    
                }
            }).then(function(data){
                pr.resolve(data);
            }, function(er){
                pr.reject(er);
            });
        }
        
    };
    return object;
});