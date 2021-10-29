function inserirAutenticacao(){
    const myHeaders = new Headers();

    const myBody = {
        "username": "admin",
        "password": "password"
    };

    const myInit = {
        method: 'POST',
        Headers: myHeaders,
        body: myBody,
        mode: 'cors',
    }

    fetch("https://automationintesting.online/auth/login", myInit)
        .then((response) => {
            return response.status;
        })
        .then(())
}