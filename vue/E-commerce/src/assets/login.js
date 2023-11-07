// document.addEventListener("DOMContentLoaded", function () {
//     const user = document.getElementById("username")
//     const emailvalid = document.getElementById("emaillogin")
//     const passwordvalid = document.getElementById("password")
//     const btn_login=document.getElementById("btn-login")


//     btn_login.addEventListener("click", (e) => {
//         e.preventDefault()
//         if (user.value === "" || emailvalid.value === "" || passwordvalid.value === "") {
//             alert('Please fill all the fields')
//         }
//         else {
//             if (user.value === localStorage.getItem("name") && emailvalid.value === localStorage.getItem("email") && passwordvalid.value === localStorage.getItem("password"))
//             { alert("login successfully")
//                 window.location='home'
//                 }
//         }
//     })
// })