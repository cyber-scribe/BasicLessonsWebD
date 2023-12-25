function validateForm() {
   
    var nameInput = document.getElementById('name').value;
    var passwordInput = document.getElementById('password').value;
   
    var nameRegex = /^[a-zA-Z ]{6,}$/; 
    var passwordRegex = /^.{6,}$/;     
    
    if (!nameRegex.test(nameInput)) {
        alert('Invalid name. Please enter alphabets and use at least 6 characters.');
        return false;
    }

    if (!passwordRegex.test(passwordInput)) {
        alert('Invalid password. Please use at least 6 characters.');
        return false;
    }

    return true;
}
