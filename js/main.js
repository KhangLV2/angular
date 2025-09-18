// Khởi tạo module
// set angular cho vùng myApp
var myApp = angular.module("myApp", []);
myApp.controller("myCtrl", function ($scope) {
  // tham số $scope luôn luôn phải có để reder dữ liệu qua view
  $scope.student = {
    name: "Nguyễn Văn A",
    namSinh: 2005,
    nganh: "Phát triển phần mềm",
  };
  $scope.employee = [
    {
      name: "Nguyễn Văn B",
      namSinh: 2005,
      nganh: "Phát triển phần mềm",
    },
    {
      name: "Nguyễn Văn C",
      namSinh: 2005,
      nganh: "Phát triển phần mềm",
    },
    {
      name: "Nguyễn Văn D",
      namSinh: 2005,
      nganh: "Phát triển phần mềm",
    },
  ];
});
