app.controller("countryReadController", function($scope, countryReadFactory){
    
    $scope.currentPage = 0;
	 $scope.pageSize = 10;
	$scope.paging = function(){

	    var a;
        $scope.currentPage = 0;
	   
	    $scope.numberOfPages = function () {
	        return Math.ceil(($scope.countryData.length / $scope.pageSize));
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
       
        for(x in $scope.Country){
            $scope.Country[x] = "";
        }
   };
    
    $scope.loadData = function(){
      var promise = countryReadFactory.getCountryList();
      promise.then(function(data){
          $scope.CountryData = data.data;
      },function(er){
          console.log(er);
      });   
        
   };
    
   $scope.readCountry = function(index,doDisable){
      
      $scope.doDisable = doDisable;
      var dto_obj = $scope.CountryData[index];
      var promise = countryReadFactory.readCountry(dto_obj);
      promise.then(function(data){
          console.log(data);
          $scope.Country = data.data;
          for(x in $scope.Country){
              $scope.Country[x] = data.data[x];
          }
      },function(er){
          console.log(er);
      });   
   };
    
   $scope.updateCountry = function(dto_obj,doDisable){
       
       $scope.doDisable = doDisable;
       var promise = countryReadFactory.updateCountry(dto_obj);
       promise.then(function(data){
           $scope.CountryData[0] = data.data;
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