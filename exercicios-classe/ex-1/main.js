function obterPersonagens (){
    const myHeaders = new Headers ();
    const myInit = {
        method: 'GET',
        headers: myHeaders,

    }

    let headers;
    let json;
    let text;
    let status;

    fetch("https://adventuretimeapi.herokuapp.com/people", myInit)
.then((resposta)=>{ 

    // console.log(resposta.text());
    headers=resposta.headers;
    json= resposta.json();
    // text=resposta.text();
    status=resposta.status;

})
.then((resultado) => console.log(
    {
        respostaHeader: headers,
        respostaJson: json,
        respostaText: text,
        respostaStatus: status,
    }
))

.catch((error)=> {
    console.log(error);

})

}

function trazerPersonagens (){

    const myHeaders = new Headers ();
    const myInit = {
        method: 'GET',
        headers: myHeaders,
    }

        fetch("https://adventuretimeapi.herokuapp.com/people", myInit)
        .then((resposta)=> {

            return resposta.json();
        })

        .then((data)=> {
            console.log(data);
            const nomes = [];

            data.map((personagem) => {

                nomes.push(personagem.name);

            })
            document.querySelector("#personagens").innerHTML = nomes;

        })

        .catch((error)=>{
            console.log(error);
        })

}