var myapp = angular.module("myApp", []);
myapp.controller("myCtrl", function ($scope) {
  $scope.empoyees = [
    {
      name: "Nguyen Thi Nga",
      ngaySinh: new Date("2023-09-23"),
      luong: 25000,
      gioiTinh: 0,
    },
    {
      name: "Nguyen Van B",
      ngaySinh: new Date("2023-09-23"),
      luong: 15000,
      gioiTinh: 1,
    },
    {
      name: "Tran Thi Linh",
      ngaySinh: new Date("2023-09-23"),
      luong: 19000,
      gioiTinh: 0,
    },
    {
      name: "Nguyen Van D",
      ngaySinh: new Date("2023-09-23"),
      luong: 9000,
      gioiTinh: 1,
    },
  ];
  $scope.hoTen = "Nguyen Van Nam";
  $scope.number = 2;
  $scope.onChange = function (ten, ns) {
    alert("Xin chào mọi người: " + ten + "\n Ngày sinh: " + ns);
  };
  $scope.myDyc = function ($ns) {
    let tuoi = new Date().getFullYear() - $ns.getFullYear;
    if (tuoi < 18) {
      console.log("Đi tù");
    } else {
      console.log("Lấy vợ");
    }
  };
});
