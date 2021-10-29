// function trazerPersonagens() {
//     const myHeaders = new Headers();

//     /*     myHeaders.append("Content-type", "JSON");
//         myHeaders.append("Authorization", "asasasasassasasa"); */

//     const myInit = {
//         method: 'GET',
//         headers: myHeaders,
//     }


//     fetch("https://adventuretimeapi.herokuapp.com/people", myInit)
//         .then((resposta) => {
//             return resposta.text();
//         })
//         .then((resultado) => console.log(resultado))
//         .catch((error) => {
//             console.log(error);
//         })
//         .catch((error) => {
//             console.log("deu ruim!");
//         })

// }


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
            /* const nomes = data.map((personagem) => {
                return personagem.name;
            })
            document.querySelector("#personagens").textContent = nomes; */

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