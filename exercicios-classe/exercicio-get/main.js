function trazerPersonagens () {
    const myHeaders = new Headers();
    
/*     myHeaders.append("Content-type", "JSON");
    myHeaders.append("Authorization", "asasasasassasasa"); */
    
    const myInit = {
        method: 'GET',
        headers: myHeaders,
    }

    let headers;
    let json;
    let text;
    let status;

    fetch("https://adventuretimeapi.herokuapp.com/people", myInit)
        .then((resposta) => {
            headers = resposta.headers;
            //apenas pode ser utilizado um dos métodos abaixo: ou se usa o text(), ou se usa o json();
            //text = resposta.text();
            json = resposta.json();
            status = resposta.status;
        })
        .then((resultado) => console.log({
            respostaHeader: headers,
            respostaJson: json,
            respostaText: text,
            respostaStatus: status,
        }))
        .catch((error) => {
            console.log(error);
        });
}

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
            document.getElementById("sites").innerHTML = `<span><a></a></span>`;
        })
        .catch((error) => {
            console.log(error);
        })
}