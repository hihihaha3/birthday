$("#login-button").click(function (event) {
  let userName = document.getElementById("userName").value;
  let pwd = document.getElementById("pwd").value;
  if (userName == "Minh Hương" && pwd == "3110") {
    $("#h").text("wellcome！");
    event.preventDefault();
    $("form").fadeOut(500);
    $(".wrapper").addClass("form-success");
    setTimeout(function () {
      location.href = "BirthdayCake.html";
    }, 4000);
  } else {
    alert("用户名或密码不正确！");
  }
});