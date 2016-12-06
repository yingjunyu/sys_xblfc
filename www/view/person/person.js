angular.module('App')
.controller('PersonController', function ($scope, $http, $ionicLoading, Chats) {
  //var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

  $scope.chats = Chats;

  $ionicLoading.show();
  $scope.load = function () {
    /*$http.get('http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html').success(function (news) {
      $scope.news = news.T1348647853363;
      $ionicLoading.hide();
      console.log(news);
    }).error(function (err) {
      $ionicLoading.show({
        template: 'Could not load news. Please try again later.',
        duration: 3000
      });
    }).finally(function () {
      $scope.$broadcast('scroll.refreshComplete');
    });*/
    //console.log($scope.chats);
    $ionicLoading.hide();
  }
  $scope.load();
});
