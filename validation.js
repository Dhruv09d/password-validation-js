  function click_submit() {
    var firstname   = document.getElementById("fname").value;
    var lastname    = document.getElementById("lname").value;
    var username    = document.getElementById("uname").value;
    var email       = document.getElementById("Email").value;
    var Password    = document.getElementById("Pass").value;
    var ConfirmPass = document.getElementById("C_Pass").value;
    var Ucase       = /[A-Z]/g;
    var Lcase       = /[a-z]/g;
    var num         = /[0-9]/g;
    var Schar       = /[!@#$%^&*]/g;
    var atr         = /[@]/g;
    var end         = /[.]/g;
    var c = 0;

    if(firstname.length != 0 && lastname.length != 0 && username.length != 0 && email.length != 0 && Password.length != 0 && ConfirmPass.length != 0 ) 
    {
        // email validation
        if(email.match(atr) == '@' && email.match(end) == '.') 
            c += 1;
        else 
            alert("Please enter a valid Email ID!");

        // password validation
        if(Password.length < 8 || Password.length > 16)
            alert("Password length should be 8-16 character");
        else 
        {
            if (Password != ConfirmPass)
                alert("Password doesnot match!!");
            else 
            {
                if(Password.match(Ucase) != null && Password.match(Lcase) != null && Password.match(num) != null && Password.match(Schar) != null)
                    c += 1; 
                else
                    alert("Password is too weak!!! \nPassword must contain at least\n 1 uppercase [A-Z]\n 1 lowercase [a-z]\n 1 number [0-9] and\n 1 Special character [!, @, #, $, %, ^, &, *]");      
            }
        }
    }
    else
        alert("You cannot leave any field empty!");
    if(c == 2) 
        alert("Login Successful");
}
