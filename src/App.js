import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from './utils/pokemon.js';

function App() {

  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      //各ポケモンの詳細なデータを取得
 //     loadPokemon(res.results);
      console.log(res);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  /*
  const loadPokemon = (data) => {
    let _pokemonData = Promise.all()
    data.map((pokemon) => {
      //console.log(pokemon);
      return 
    })
  };
  */

  return (
    <div className="App">
      {loading ? (
        <h1>ロード中…</h1>    
      ) : (
        <>
          <h1>ポケモンデータを取得しました</h1>
        </>
      )}
    </div>
  );
}

export default App;