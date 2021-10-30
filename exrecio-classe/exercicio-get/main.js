function trazerPersonagens() {
    const myHeaders = new Headers();

    /*     myHeaders.append("Content-type", "JSON");
        myHeaders.append("Authorization", "asasasasassasasa"); */

    const myInit = {
        method: 'GET',
        headers: myHeaders,
    }




    fetch("https://adventuretimeapi.herokuapp.com/people", myInit)
        .then((resposta) => {
            return resposta.text();
        })
        .then((resultado) => console.log(resultado))
        .catch((error) => {
            console.log(error);
        })
        .catch((error) => {
            console.log("deu ruim!");
        })


}