window.LienHeController = function ($scope, $routeParams) {
  $scope.message = "Đây là liên hệ";
  let id = $routeParams.id;
  console.log(id);
};
