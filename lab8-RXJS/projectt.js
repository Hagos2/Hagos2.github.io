// const SERVER_ROOT = 'http://localhost:3000';

// window.onload = function() {

//     if (localStorage.getItem('accessToken')) {

//         afterLogin();

//     } else {

//         notLogin();

//     }

//     document.getElementById('loginBtn').onclick = function() {

//         const username = document.getElementById('username').value;

//         const password = document.getElementById('password').value;

//         fetch(`${SERVER_ROOT}/api/auth/login`, {

//                 method: 'POST',

//                 body: JSON.stringify({

//                     username,

//                     password

//                 }),

//                 headers: {

//                     'Content-Type': 'application/json'

//                 }

//             }).then(response => response.json())

//             .then(data => loggedInFeatures(data));

//     }
//     document.getElementById('logoutBtn').onclick = function() {

//         localStorage.removeItem('accessToken');

//         notLogin();

//     }

// }

// function loggedInFeatures(data) {

//     if (data.status) {

//         document.getElementById('errormessage').innerHTML = data.message;

//     } else {

//         document.getElementById('username').value = '';

//         document.getElementById('password').value = '';

//         localStorage.setItem('accessToken', data.accessToken);

//         afterLogin();

//     }

// }
// function fetchMusic() {

//     fetch(`${SERVER_ROOT}/api/music`, {

//             headers: {

//                 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`

//             }

//         })

//         .then(response => response.json())

//         .then(songs => console.log(songs));

// }

// function fetchPlayList() {

// }
// function afterLogin() {

//     document.getElementById('search').style.display = 'block';

//     document.getElementById('logout-div').style.display = 'block';

//     document.getElementById('login-div').style.display = 'none';

//     fetchMusic();

//     fetchPlayList();

//     document.getElementById('content').innerHTML = 'Content of the music';

// }

// function notLogin() {

//     document.getElementById('search').style.display = 'none';

//     document.getElementById('logout-div').style.display = 'none';

//     document.getElementById('login-div').style.display = 'block';

//     document.getElementById('content').innerHTML = 'Welcome to MIU Station';

// }
