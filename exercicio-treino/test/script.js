
function trazerMusica() {
    const myHeaders = new Headers();

    /*     myHeaders.append("Content-type", "JSON");
        myHeaders.append("Authorization", "asasasasassasasa"); */
    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
    }

    let headers;
    let json;
    let text;
    let status;

    let letrasMusica = document.querySelector('#btnBusca')
    let inputArtista = document.querySelector('#inputArtista').value;
    let musica = document.querySelector('#artista').innerHTML;

    fetch(`https://api.vagalume.com.br/search.php?art=${inputArtista}&text=&extra=alb,relmus,relart&apikey={nayara}`, myInit)
        .then((resposta) => {
            headers = resposta.headers;
            //apenas pode ser utilizado um dos métodos abaixo: ou se usa o text(), ou se usa o json();
            // text = resposta.text();
            json = resposta.json()
            status = resposta.status;
            

        })

        // Letra da música



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


