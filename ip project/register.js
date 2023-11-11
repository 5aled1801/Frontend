function addData() {
  var email = document.getElementById("email").value;

  var psw = document.getElementById("pwd").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_records.some((v) => {
      return v.email == email;
    })
  ) {
    alert("duplicate data");
  } else {
    user_records.push({
      email: email,
      psw: psw,
    });
    localStorage.setItem("users", JSON.stringify(user_records));
    alert("You register successfully");
  }
}
