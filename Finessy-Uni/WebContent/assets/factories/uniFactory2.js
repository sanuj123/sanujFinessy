app.factory("uniFactory2", function($http, $q){
    
    console.log("Async call 2");
    
    var object = {
        
       updateUniversity: function (University) {

            var pr = $q.defer();
            $http({

                url: "http://localhost:8080/Finessy-Uni/unicontroller",
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
            return pr.promise;
        },

        readUniversity: function (University) {
        	console.log("Factory read");
            var pr = $q.defer();
            $http({

                url: "http://localhost:8080/Finessy-Uni/unicontroller",
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
            return pr.promise;
        },

        getUniversityList: function(){
        	console.log("request");
            var pr = $q.defer();
            $http.get("http://localhost:8080/Finessy-Uni/unicontroller?method=getUniversityList"
                
                
                
            ).then(function(data){
            	console.log(data);
            	pr.resolve(data);
            }, function(er){
                pr.reject(er);
            });
            return pr.promise;
        },
        
        deleteUniversity: function (University){
        	
        	 var pr = $q.defer();
             $http({

                 url: "http://localhost:8080/Finessy-Uni/unicontroller",
                 method: "post",
                 params: {
                     method: "delete",
                     dto_obj: University
                 }
             }).then(function (data) {
                 pr.resolve(data);
             }, function (er) {
                 pr.reject(er);
             });
             return pr.promise;
        }
        
    };
    return object;
});