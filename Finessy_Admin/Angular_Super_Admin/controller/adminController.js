app.controller("adminController",function($scope){
    
    $scope.dataList = ['users','posts','media','pages','menus','programs','university','country','settings','students'];
    
    $scope.selectedList = {};    
    
    $scope.checkList = function(dataList){
        $scope.selectedList = [];
        for(i in dataList){
            if(dataList[i].selected){
                $scope.selectedList.push(i);
            }
        }
        console.log($scope.selectedList);
        
    };
});