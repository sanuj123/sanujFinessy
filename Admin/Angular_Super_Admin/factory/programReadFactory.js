app.factory("programReadFactory", function($http, $q){
    
    console.log("Async call 2");
    
    var object = {
        
       updateProgram: function (Program) {

            var pr = $q.defer();
            $http({

                url: location.origin+"/Finessy-Uni/unicontroller",
                method: "post",
                params: {
                    method: "update",
                    dto_obj: Program
                }
            }).then(function (data) {
                pr.resolve(data);
            }, function (er) {
                pr.reject(er);
            });
        },

        readProgram: function (Program) {

            var pr = $q.defer();
            $http({

                url: location.origin+"/Finessy-Uni/unicontroller",
                method: "post",
                params: {
                    method: "read",
                    dto_obj: Program
                }
            }).then(function (data) {
                pr.resolve(data);
            }, function (er) {
                pr.reject(er);
            });
        },

        getProgramList: function(){
            var pr = $q.defer();
            $http({
                
                url: location.origin+"/Finessy-Uni/unicontroller",
                method: "post",
                params: {
                    method: "getProgramList"
                    
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