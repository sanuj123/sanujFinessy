app.factory("programAddFactory", function ($http, $q) {
    console.log("Async call");

    var object = {
        addProgram: function (Program) {
            var pr = $q.defer();
            $http({

                url: location.origin+"/Finessy-Uni/unicontroller",
                method: "post",
                params: {
                    method: "add",
                    dto_obj: Program
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
