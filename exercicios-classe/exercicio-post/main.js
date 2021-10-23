function inserirAutenticacao() {
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    const myBody = JSON.stringify({
        "username": "admin",
        "password": "password"
    });

    const myInit = {
        method: 'POST',
        headers: myHeaders,
        body: myBody,
    }

    fetch("https://automationintesting.online/auth/login", myInit)
        .then((response) => {
            return response.status;
        })
        .then((resultado) => {
            console.log(resultado);
        })
}