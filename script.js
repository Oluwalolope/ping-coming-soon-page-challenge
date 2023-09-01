const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const errorMsg = document.querySelector('.error-msg');

emailForm.addEventListener('submit', function (e){
    e.preventDefault();
    const email = emailInput.value;
    if (isValidEmail(email)){
        emailInput.classList.remove('error');
        errorMsg.style.display = 'none';
        alert(`Email successfully sent to ${email} `);// Show a pop-up message
        // You can sumbit the form here
        emailForm.reset();// Reset the form after succesful submission
        errorMsg.style.display = 'none';// Hide the error message
    } else {
        emailInput.classList.add('error');
        errorMsg.style.display = 'block';
    }
});

function isValidEmail(email) {
    //Basic email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
};