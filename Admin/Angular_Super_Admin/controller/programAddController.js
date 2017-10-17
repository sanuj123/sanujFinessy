app.controller("programAddController", function($scope,programAddFactory){
    
   $scope.addProgram = function(){
       var dto_obj = $scope.Program;
       var promise = programAddFactory.addProgram($scope.Program);
       promise.then(function(data){
           console.log(data);
           
       },function(er){
           console.log(er);
       })
   }; 
    
   $scope.resetFields = function(){
       
        for(x in $scope.Program){
            $scope.Program[x] = "";
        }
   };
   
    
});