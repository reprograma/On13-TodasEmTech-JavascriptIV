/*Objetivos da aula:
- entender o conceito geral de APIs
- fazer requisições de APIs
- como escrever uma Promise

APIs - Application Programming Interface - são uma série de métodos e funcções que permitem que aplicações acessem dados e interajam (ver dados, atualizar, deletar, criar novos dados) - a API entrega a requisição da pessoa usuária e na requisição é retornada a resposta do sistema. 
Uma API disponibiliza uma interface de comunicação e integração entre aplicações - URL

APIs são muito utilizadas porque elas são práticas e facilitam o desenvolvimento de uma aplicação. Exemplo: você está criando uma página de formulário de cadastro ao seu sistema. No campo de endereço, você precisa que ele seja automaticamente encontrado e preenchido a dependente do CEP inserido pelo usuário na tela.

Ao criar do zero uma aplicação que faça essa busca e preenchimento, você pode usar uma API já pronta que realiza essa função que você precisa - no caso, a ViaCEP , ApiCEP , dentre outras.

Arquitetura de criação de APIs:
SOAP - mais antigas, em pouco uso atualmente. Resultado retorado em XML (muito parecido com HTML, mas sem as tags pré-definidas)
REST - mais utilizada atualmente, modelo mais simples de requisição.

POSTAMAN - programa utilizado em aula e no mercado, para fazer requisições de APIs.

Para requisitar uma API
- URL disponibilizada, nossa interface de conexão (protocolo HTTP)
- método HTTP que precisa para fazer a requisição. Método HTTP são funções, modo de requisição. Os tipos mais usados são:
GET - pega uma informação - 200  ***normalmente APIs públicas só apresentam esse método***
POST - cria uma informação/novo item dentro da aplicação - 201(salvou no banco de dados a requisição feita)  ***essas demandam/presumem a entrada de um BODY***
PUT/PATCH - atualiza uma informação - 200
DELETE - remove um item
OPTIONS - descobre os tipos de requisição que derminada API disponibiliza
- em alguns casos, se quisermos dados mais específicos, devemos colocar alguns inputs, tais como:
*query params - parâmetros de pesquisa
*token de autorização (authorization)
*HEADERS --> é de boa prática e para fins de estudo tbm, colocarmos HEADERS nas nossas requisições, afinal ela é uma das partes que compõem uma requisição e muitas vezes (sobretudo em APIS privadas) vamos precisar colocar alguma coisa dentro dele.

A resposta da requisição é composta pelo seu STATUS e pelo próprio dado retornado no formato JSON (JS Object Notation)

Respostas:
200 - OK
201 - created - criado (salvou no banco de dados a requisição feita)
400 - bad request - está faltando algum, um input...
401 - unauthorized - não está autorizado. A API espera receber um token, uma chave etc. algo para autorizar. A autenticação entra na HEADER da requisição. A HEADER mostra as informações específicas que ela espera da API
404 - not found - não encontrado. Aparece colchetes vazios []
500 - internal server error - erro interno de servidor

As respostas, ou seja, o JSON vem em "texto corrido", uma grande string (visualização PREVIEW"). Usamos o método 
JSON.parse(data) para transformar a data (dado) "string" do JSON em um objeto JS (array com objeto). Depois disso fica mais fácil de manipular os dados, usando os métodos que conhecemos, a exemplo do forEach, for, map, find...

Tipos de requisição a APIS
- Método FEtCH -> método de requisição de API dentro do código
no POSTMAN esse símbolo </> mostra pra gente um snippet (trecho de código)

Requisição Síncrona - aquelas que são feitas pela execução do código de forma linear, ou seja, de cima para baixo. Executa um bloco de código para depois executar o bloco seguinte. Um comando por vez. Ocorria um congelamento da tela até que os dados fossem obtidos, é necessário recarregar a página após uma requisição.

Requisição Assíncrona - permite a ocorrência de mais de um evento de uma vez, que eles sejam executados ao mesmo tempo no JS. Não é necessario carregar a página após a requisição. 99% das requisições feitas são desse tipo.

Tipos de Requisição Assícronas:
Método XMLHttpRequest: utiliza principalmente do addEventListener para criar chamadas assíncronas

Método Fetch: interface JS de acesso e manipulação de partes de uma requisição HTTP - como o pedido e as respostas obtidas. Manipular o pedido é especificar qual o método (GET, POST, PUT etc.) que eu quero, incluir as HEADERS.
Manipular as respostas através do THEN e do CATCH(pegar, capturar)

ex: const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors' -> está relacionado ao servidor aceitar ou não a nossa requisição
        cache: 'default' -> cache série de informações que os navegadores armazenam. São arquivos temporários que normalmente são excluídos quando se desliga a máquina ou quando fazemos a limpeza do cache manualmente.
        
    }

    ex. de aula:
    function trazerPersonagens () {
        const myHeaders = new Headers(); -> new Headers é um método próprio que já insere algumas HEADERS padrão, alguns parâmetros dentro da HEADER
            Primeira etapa: inicializamos as nossas HEADERS. É um grande objeto que colocamos algumas chaves tanto para melhorar a resposta da API, tanto para ter acesso à ela.

        const myInit = {
        method: 'GET',
        headers: myHeaders,       *** as HEADERS padrões que estão contidas na const myHeaders ***  
        }
            Segunda etapa: criamos um objeto incluindo as HEAERS e o método método que precisamos utilizar. Ou seja,com o necessário que precisamos para inicializar a API.

        fetch()   ---> método de requisição, de acesso à API <---
        Inicializar esse método que é o que vai fazer a requisição. O fetch aceita dois parâmetros: o input (URL + myInit -informações da requisição-)
        Métodos para manipular a resposta do método fetch:
        *THEN: sempre vai esperar uma callback. Esse método trata a resposta caso a requisição seja aceita. ** As respostas das requisições têm propriedades e métodos específicos que podemos usar para tratá-las e manipulá-las. Dentre eles o mais usado é o --> .text <--porque ele traz o body da respostas, ou seja, o próprio JSON. **

        O fetch é uma requisição assíncrona que sempre espera uma PROMISE. O que consta dentro do THEN é uma PROMISE(a resposta da nossa requisição vem dentro de um objeto que é uma grande "promessa").
        PROMISE representa um valor que eventualmente retornará após uma operação ser integralmente realizada. Ou seja,  é um objeto que representa o sucesso ou o fracasso de uma operação assíncrona, e o seu eventual valor de retorno.
            .then((resposta) => {
                console.log(resposta);
            })

            Logo, a promise tem três estados:

            a) **pending:** status inicial, ainda pendente de completude ou rejeição.

            b) **fulfilled:** operação com sucesso.

            c) **rejected:** operação rejeitada.

            Tratando-se de uma requisição assíncrona, o resultado  não chega necessariamente na mesma hora, vai chegar em algum momento, justamente porque é uma requisição assíncrona (faz outras coisas enquanto aguarda o resultado, status de pending). A requisição foi disparada mas o resultado dela ainda não foi completado dentro do código.

            Podemos ter mais de THEN dentro de uma PROMISE. Podemos ter um THEN para receber o valor do resultado dessa PROMISE e concatenar outro THEN para executar alguma coisa com aquele valor. Só se coloca ";" no último método a ser executado, senão ele entende que a requisição está completa e não vai executar o bloco seguinte.

            O primeiro THEN vai retornar a resposta da nossa requisição. Podemos colocar em variáveis os itens da resposta que queremos salvar, para manipulá-los depois.
            Nos THEN's seguintes a gente manipula o resultado.

            Uma das propriedades da resposta é o .json. Muito parecido com o .text (que nos traz o json da resposta), a propriedade .json traz outras propriedades da array, como o length, 

        *CATCH: trata o erro, quando há a rejeição da requisição. Usamos tanto para obter o erro quanto para manipular o erro recebido. Incluir para averiguar eventuais erros que tenham numa requisição.
        *FINALLY



       
        

https://www.google.com/search*** search é o nome da API*** ? *** o que vem depois da interrogação normalmente são os parâmetros de pesquisa*** q=fetch&rlz=1C1CHZN_pt-BRBR935BR935&oq=fetch&aqs=chrome..69i57j0i433i512j0i512j0i131i433i512j0i512l3j46i512j0i512j46i512.1065j1j15&sourceid=chrome&ie=UTF-8








*/

