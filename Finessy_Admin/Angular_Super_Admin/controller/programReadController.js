app.controller("programReadController", function($scope, programReadFactory){
    
    $scope.currentPage = 0;
	 $scope.pageSize = 10;
	$scope.paging = function(){

	    var a;
        $scope.currentPage = 0;
	   
	    $scope.numberOfPages = function () {
	        return Math.ceil(($scope.programData.length / $scope.pageSize));
	    }

	    $scope.roundOff = function () {
	        if ($scope.currentPage >= $scope.numberOfPages()) {
	            $scope.currentPage = parseInt($scope.currentPage / $scope.numberOfPages()) - 1;
	            console.log("if condition");
	        }

	    }
	    $scope.current = function () {
	        a = $scope.currentPage;
	    }

	    $scope.$watch('search', function (newValue, oldValue) {
	        if (oldValue != newValue) {
	            $scope.currentPage = 0;
	            if ($scope.search == "")
	                $scope.currentPage = a;
	        }
	    }, true);
	    
	    $scope.$watch('pageSize',function(newValue, oldValue){
	         if(oldValue != newValue){
	             $scope.currentPage = Math.floor($scope.currentPage*(oldValue/newValue));
	         }
	        
	    },true);
	}//End of pagination. 
    
    $scope.resetFields = function(){
       
        for(x in $scope.Program){
            $scope.Program[x] = "";
        }
   };
    
    $scope.loadData = function(){
      var promise = programReadFactory.getProgramList();
      promise.then(function(data){
          $scope.ProgramData = data.data;
      },function(er){
          console.log(er);
      });   
        
   };
    
   $scope.readProgram = function(index,doDisable){
      
      $scope.doDisable = doDisable;
      var dto_obj = $scope.ProgramData[index];
      var promise = programReadFactory.readProgram(dto_obj);
      promise.then(function(data){
          console.log(data);
          $scope.Program = data.data;
          for(x in $scope.Program){
              $scope.Program[x] = data.data[x];
          }
      },function(er){
          console.log(er);
      });   
   };
    
   $scope.updateProgram = function(dto_obj,doDisable){
       
       $scope.doDisable = doDisable;
       var promise = programReadFactory.updateProgram(dto_obj);
       promise.then(function(data){
           $scope.ProgramData[0] = data.data;
           console.log(data);
       },function(er){
           console.log(er);
       });
   };
    
       
});

app.filter('startFrom', function () {
    return function (data, start) {
        start = +start;
        return data.slice(start);

    }
});