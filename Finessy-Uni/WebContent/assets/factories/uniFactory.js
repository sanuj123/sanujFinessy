app1.factory("uniFactory", function ($http, $q) {
    console.log("Async call");

    var object = {
        addUniversity: function (University) {
            var pr = $q.defer();
            $http({

                url: "http://localhost:8080/Finessy-Uni/unicontroller",
                method: "post",
                params: {
                    method: "add",
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
