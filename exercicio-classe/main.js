
function trazerPersonagens () {
  const myHeaders = new Headers();
  
/*     myHeaders.append("Content-type", "JSON");
  myHeaders.append("Authorization", "asasasasassasasa"); */
  
  const myInit = {
      method: 'GET',
      headers: myHeaders,
  }


  fetch("https://adventuretimeapi.herokuapp.com/people", myInit)
  .then((resposta) => {
      console.log(resposta.text());
  })
  .catch((error) => {
    console.log(error);
  })

}


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
  .then((data) =>{
    console.log(data);
    return data.map((personagem) => {
      
    })

  })
  .catch((error) =>{
    console.log(error)
  })
}

obterPersonagens();