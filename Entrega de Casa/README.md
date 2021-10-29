# Javascript IV 

**Objetivo geral:** Conseguir realizar requisições em API 

**Objetivo específico:** Aprender os conceitos de cliente e servidor, o que é uma API, utilizar o fetch() pra fazer comunicações com API. 

## Entregável

Implementar os métodos `fetchPokemonsAsync()` e `getPokemonAsync(id)` no arquivo `app.js` do projeto Pokedex.

O método `fetchPokemonsAsync()` deve obter pokemons de https://borgesdn.github.io/pokedex-source/pokedex.json e inserir o resultado na variavel `pokemonList`.

O método `getPokemonAsync(id)` deve obter pokemon de acordo com id passado no argumento em https://pokeapi.co/api/v2/pokemon/{id} e retornar o pokemon obtido.

Em ambos os métodos deve ser utilizadas as duas maneiras de "esperar" funções assíncronas.
