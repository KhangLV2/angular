window.TrangChuController = function ($scope) {
  // $scope.title = "Đây là trang chủ";

  $scope.onsubMit = function () {
    var a = $scope.inputValue.soA;
    var b = $scope.inputValue.soB;

    $scope.ketQua = a + b;
  };
  //

  $scope.onSubmitForm = function () {
    if ($scope.inputValue.ps == "thaydinhdz") {
      $scope.hienThi = $scope.inputValue.us;
    } else {
      alert("Bạn nhập sai mật khẩu");
    }
  };
};
