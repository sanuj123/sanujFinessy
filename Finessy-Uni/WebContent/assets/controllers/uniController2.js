app.controller("uniController2", function($scope, uniFactory2){
	
	 $scope.pageSize = 10;

	    $scope.currentPage = 0;
	    var a;

	   
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
	
    $scope.resetFields = function(){
       
        for(x in $scope.University){
            $scope.University[x] = "";
        }
   };
    
    $scope.loadData = function(){
    	console.log("in list controller");
      var promise = uniFactory2.getUniversityList();
      promise.then(function(data){
          $scope.universityData = data.data;
      },function(er){
          console.log(er);
      });   
        
   };
    
   $scope.readUniversity = function(index,doDisable){
      
      $scope.doDisable = doDisable;
      var dto_obj = $scope.universityData[index];
      console.log("data read");
      var promise = uniFactory2.readUniversity(dto_obj);
      promise.then(function(data){
    	  console.log("data brought");
          console.log(data);
          $scope.University = data.data;
          for(x in $scope.University){
              $scope.University[x] = data.data[x];
          }
      },function(er){
          console.log(er);
      });   
   };
    
   $scope.updateUniversity = function(){
	    var dto_obj2 = $scope.University;

       var promise = uniFactory2.updateUniversity(dto_obj2);
       promise.then(function(data){
           $scope.universityData[0] = data.data;
           console.log(data);
       },function(er){
           console.log(er);
       });
   };
   
   $scope.deleteUniversity = function(index){
	 
	   var dto_obj = $scope.universityData[index];
       $scope.universityData.splice(index,1);           

	   var promise = uniFactory2.deleteUniversity(dto_obj);
	   
	   promise.then(function(data){
       },function(er){
           console.log(er);
       });
   };
    
       
});

app.filter('startFrom', function () {
    return function (universityData, start) {
        start = +start;
        return universityData.slice(start);

    }
});