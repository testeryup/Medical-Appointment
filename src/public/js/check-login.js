// Check if user is already logged in
// window.onload = function () {
//     if (localStorage.getItem('loggedIn') === 'true') {
//         if (window.location.pathname.endsWith('login')) {
//             window.location.href = '/html/dashboard.html';
//         }
//     } else if (window.location.pathname.endsWith('dashboard.html')) {
//         window.location.href = '/html/login';
//     }
// };

// Login Functionality
// const loginForm = document.getElementById('login-form');
// if (loginForm) {
//     loginForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const username = document.getElementById('username').value;
//         const password = document.getElementById('password').value;

//         // Simulated login - hardcoded credentials for simplicity
//         if (username === 'admin' && password === 'password123') {
//             localStorage.setItem('loggedIn', 'true');
//             window.location.href = '/html/dashboard.html';
//         } else {
//             document.getElementById('error-message').textContent = 'Invalid username or password';
//         }
//     });
// }

// Logout Functionality
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
        localStorage.clear();
        window.location.href = '/';
    });
}
