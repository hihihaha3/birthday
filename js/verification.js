$("#login-button").click(function (event) {
  let userName = document.getElementById("userName").value;
  let pwd = document.getElementById("pwd").value;
  if (userName == "" && pwd == "") {
    $("#h").text("wellcome！");
    event.preventDefault();
    $("form").fadeOut(500);
    $(".wrapper").addClass("form-success");
    setTimeout(function () {
      location.href = "BirthdayCake.html";
    }, 4000);
  } else {
    alert("Tên người dùng hoặc mật khẩu không đúng！");
  }
});
