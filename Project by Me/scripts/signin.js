// const container=document.querySelector(".container") ;
//     const loginForm=document.querySelector('.login-form')
//     const RegisterForm=document.querySelector('.Register-form');
//     const registeredBtn = document.getElementById(".registerBtn")
//     const RegiBtn=document.querySelector('.RegiBtn');
//     const LoginBtn=document.querySelector('.LoginBtn');
//     RegiBtn.addEventListener('click',()=>{
//         RegisterForm.classList.add('active');
//         loginForm.classList.add('active')
//     })
//     LoginBtn.addEventListener('click',()=>{
//         RegisterForm.classList.remove('active');
//         loginForm.classList.remove('active')
//     })

//     registeredBtn.addEventListener('click',(e)=>{
//         e.preventDefault()
//         alert("hello")
//     })

const container = document.querySelector(".container");
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.Register-form');

// Register button to toggle between login and register forms
const RegiBtn = document.querySelector('.RegiBtn');
const LoginBtn = document.querySelector('.LoginBtn');

    RegiBtn.addEventListener('click',()=>{
        registerForm.classList.add('active');
        loginForm.classList.add('active')
    })
    LoginBtn.addEventListener('click',()=>{
        registerForm.classList.remove('active');
        loginForm.classList.remove('active')
    })



// Form submit event listeners
const loginButton = document.querySelector('.login-form button');
const registerButton = document.querySelector('.Register-form button');

// Capture data from login form
loginButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent page refresh
    const email = document.querySelector('.login-form input[type="email"]').value;
    const password = document.querySelector('.login-form input[type="password"]').value;

    if (email && password) {
        // Do something with the login data, like sending it to a server
        alert(`Login Successful with Email: ${email} and Password: ${password}`);
    } else {
        alert("Please fill in both email and password.");
    }
});

// Capture data from register form
registerButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent page refresh
    const email = document.querySelector('.Register-form input[type="email"]').value;
    const password = document.querySelector('.Register-form input[type="password"]:nth-of-type(1)').value;
    const confirmPassword = document.querySelector('#confirmPass').value;

    if (email && password && confirmPassword) {
        if (password === confirmPassword) {
            // Do something with the register data, like sending it to a server
            alert(`Registration Successful with Email: ${email}`);
        } else {
            alert("Passwords do not match.");
        }
    } else {
        alert("Please fill in all fields.");
    }
});
