function validate() {
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
    var id = "thanhloi@gmail.com";
    var ps = "123";
    if(u == "" || p=="")
    {
        if(u=="") {
            alert("Please enter Email");
            return false;
            }
            if(p =="") {
            alert("Please enter Password");
            return false;
            }
    }
    else{
        if(u != id || p != ps )
        {
            alert("Incorrect Email or Password");
            return false;
        } 
        return true;
    } 
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

function show(){
    var f = document.getElementById("fill");
    if(f.style.display === "none"){
        f.style.display = "flex"
    }
    else{
        f.style.display = "none"
    }
}

function confirm() {
    var e = document.getElementById("email").value;
    var f = document.getElementById("f_name").value;
    var l = document.getElementById("l_name").value;
    var com = document.getElementById("company").value;
    var t = document.getElementById("town").value;
    var s = document.getElementById("street").value;
    var p = document.getElementById("phone").value;
    if(e=="" || f=="" ||l=="" ||com=="" ||t=="" ||s==""||p=="") {
        alert("Please enter full information");
        return false;
    }
    alert("Payment success");
    return true;
}
