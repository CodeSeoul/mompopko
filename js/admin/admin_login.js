function login(e) {

    e.preventDefault();
    let form = e.target;
    let id = form.elements.id.value;
    let password = form.elements.password.value;
    let data = {
        id: id,
        password: password
    }

    fetch("../../php/login.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        console.log(JSON.stringify(data))
    }).catch(err => {
        console.log(err)
    })
    console.log(data)
}

let loginForm = document.querySelector("#login-form");
loginForm.addEventListener('submit', (e) => login(e))