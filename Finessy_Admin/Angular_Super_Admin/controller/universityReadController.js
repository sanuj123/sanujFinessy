app.controller("universityReadController", function($scope, universityReadFactory){
    
    $scope.currentPage = 0;
	 $scope.pageSize = 10;
	$scope.paging = function(){

	    var a;
        $scope.currentPage = 0;
	   
	    $scope.numberOfPages = function () {
	        return Math.ceil(($scope.universityData.length / $scope.pageSize));
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
       
        for(x in $scope.University){
            $scope.University[x] = "";
        }
   };
    
    $scope.loadData = function(){
      var promise = universityReadFactory.getUniversityList();
      promise.then(function(data){
          $scope.universityData = data.data;
      },function(er){
          console.log(er);
      });   
        
   };
    
   $scope.readUniversity = function(index,doDisable){
      
      $scope.doDisable = doDisable;
      var dto_obj = $scope.universityData[index];
      var promise = universityReadFactory.readUniversity(dto_obj);
      promise.then(function(data){
          console.log(data);
          $scope.University = data.data;
          for(x in $scope.University){
              $scope.University[x] = data.data[x];
          }
      },function(er){
          console.log(er);
      });   
   };
    
   $scope.updateUniversity = function(dto_obj,doDisable){
       
       $scope.doDisable = doDisable;
       var promise = universityReadFactory.updateUniversity(dto_obj);
       promise.then(function(data){
           $scope.universityData[0] = data.data;
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