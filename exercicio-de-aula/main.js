
 /*function trazerPersonagens () {
    const myHeaders = new Headers();
    
/*     myHeaders.append("Content-type", "JSON"); --> esse append está inserindo uma propriedade no Header. Colocar chaves na Header que são importantes quando se faz uma requisição, para que seja aceita pela API.
    myHeaders.append("Authorization", "asasasasassasasa"); */
    
    /*const myInit = {
        method: 'GET',
        headers: myHeaders,
    }

    let headers;
    let json;
    let text;
    let status;


    fetch("https://adventuretimeapi.herokuapp.com/people", myInit)
        .then((resposta) => {
            //console.log(resposta.text());
            //return resposta.text();
            headers = resposta.headers;
            //apenas pode ser utilizado um dos métodos abaixo: ou se usa o .text(), ou se usa o .json();
            text = resposta.text();
            json = resposta.json();
            status = resposta.status;
        })


        .then((resultado) => console.log(resultado))
        .catch((error) => {
            console.log(error);
        })
        /*.catch((error) => {
            console.log("deu ruim!");
        })

}*/

function obterPersonagens () {
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
            //console.log(data);
                const nomes =  data.map((personagem) => { 
                    return personagem.name;         
            
        })
            document.querySelector("#personagens").textContent = nomes;
        })
        .catch((error) => {
            console.log(error)

        })
}

