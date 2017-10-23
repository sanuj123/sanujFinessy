app.factory("universityReadFactory", function($http, $q){
    
    console.log("Async call 2");
    
    var object = {
        
       updateUniversity: function (University) {

            var pr = $q.defer();
            $http({

                url: location.origin+"/Finessy-Uni/unicontroller",
                method: "post",
                params: {
                    method: "update",
                    dto_obj: University
                }
            }).then(function (data) {
                pr.resolve(data);
            }, function (er) {
                pr.reject(er);
            });
        },

        readUniversity: function (University) {

            var pr = $q.defer();
            $http({

                url: location.origin+"/Finessy-Uni/unicontroller",
                method: "post",
                params: {
                    method: "read",
                    dto_obj: University
                }
            }).then(function (data) {
                pr.resolve(data);
            }, function (er) {
                pr.reject(er);
            });
        },

        getUniversityList: function(){
            var pr = $q.defer();
            $http({
                
                url: location.origin+"/Finessy-Uni/unicontroller",
                method: "post",
                params: {
                    method: "getUniversityList"
                    
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