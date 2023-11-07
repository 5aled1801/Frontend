function checkData() {
  let email, psw, page;
  email = document.getElementById("email").value;

  psw = document.getElementById("pwd").value;
  page = document.getElementById("index.html");
  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_records.some((v) => {
      return v.email == email && v.psw == psw;
    })
  ) {
    window.location.href = "index.html";
    alert("Login Successfully");
    let current_user = user_records.filter((v) => {
      return v.email == email && v.psw == psw;
    })[0];
    localStorage.setItem("email", current_user.email);
  } else {
    alert("Login Fail");
  }
}
