app.controller("countryAddController", function($scope,countryAddFactory){
    
   $scope.addCountry = function(){
       var dto_obj = $scope.Country;
       var promise = countryAddFactory.addCountry($scope.Country);
       promise.then(function(data){
           console.log(data);
           
       },function(er){
           console.log(er);
       })
   }; 
    
   $scope.resetFields = function(){
       
        for(x in $scope.Country){
            $scope.Country[x] = "";
        }
   };
   
    
});