function obterPersonagens() {
    const myHeaders = new Headers();
    const myInit = {
        method: 'GET',
        headers: myHeaders,
    }

    fetch("https://adventuretimeapi.herokuapp.com/people", myInit)
        .then((resposta) => {
            return resposta.json();
        })
        .then((data) => {

            const nomes = [];
            const url = [];

            data.forEach(function (personagem) {
                nomes.push(personagem.name);
                url.push(personagem.url);
            });

            document.querySelector("#personagens").innerHTML = nomes;
            document.getElementById("sites").innerHTML = url;
        })
        .catch((error) => {
            console.log(error);
        })
}