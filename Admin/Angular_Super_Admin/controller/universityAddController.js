app.controller("universityAddController", function($scope,universityAddFactory){
    
   $scope.addUniversity = function(){
       var dto_obj = $scope.University;
       var promise = universityAddFactory.addUniversity($scope.University);
       promise.then(function(data){
           console.log(data);
           
       },function(er){
           console.log(er);
       })
   }; 
    
   $scope.resetFields = function(){
       
        for(x in $scope.University){
            $scope.University[x] = "";
        }
   };
   
    
});