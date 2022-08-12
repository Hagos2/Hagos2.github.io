window.onload = function (){
    document.getElementById("btn").onclick = login
}

async function login (){
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify({
            username: document.getElementById('firstname').value,
            password: document.getElementById('password').value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    
    if (result.error) {
        document.getElementById('error').innerHTML = result.message;
    } else {
        
        sessionStorage.setItem('accessToken', result.data.accessToken);
        sessionStorage.setItem('username', document.getElementById('firstname').value);
       

        window.location = 'index.html';
    }
}