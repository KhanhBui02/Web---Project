function validate() {
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
     
    if(u=="") {
    alert("Please enter Email");
    return false;
    }
    if(p =="") {
    alert("Please enter Password");
    return false;
    }
    alert("Sign in success");
    return true;
}

function validatesignup(){
    var u = document.getElementById("email").value;
    var d = document.getElementById("display").value;
    var p = document.getElementById("password").value;
    var p1 = document.getElementById("re-password").value;

    if(u=="" || d=="" ||p=="" ||p1=="") {
        alert("Please enter full information");
        return false;
    }

    alert("Sign up success");
    return true;
}