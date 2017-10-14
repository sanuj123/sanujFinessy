app1.controller("uniController", function($scope,uniFactory){
  $scope.addUniversity = function(){
	  var dto_obj = $scope.University;
       var promise = uniFactory.addUniversity(dto_obj);
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