const loginValidate = () => {
   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;
    if (email === null ||email === "") {
        alert("Please enter your email.");
        return false;
    }
    if (password === null || password === "") {
         alert("Please enter your password.");
         return false;
    } else {
        return true
    }
                  
}



const registerValidate = () => {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log(firstName, lastName, email, password)
            if (email === null || email === "") {
                alert("Please enter your email.");
                return false;
            } else if( email.includes('@') === false && email.includes('.') === false) {
                alert("Please enter a valid email.");
            }

            if (firstName === null || firstName === "") {
                alert("Please enter your first name.");
                return false;
            } 

            if (lastName === null || lastName === "") {
                alert("Please enter your last name.");
                return false;
            } 

           
            if (password === null || password === "") {
                alert("Please enter the password.");
                return false;
            }else if(password.length < 8 ) {
                alert("Password must be at least 8 characters.");   
            } else {
                return true
            }
           
            

}


const validation = {
    registerValidate,
    loginValidate
}

export default validation