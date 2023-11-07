document.addEventListener('DOMContentLoaded', function () {
    var signorlogin = document.getElementById("signorlogin")
    const userfound=localStorage.getItem('name')
    
    if (userfound) {
        signorlogin.style.display = "none"
    }
})