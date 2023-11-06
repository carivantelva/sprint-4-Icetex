

import React, { useEffect, useState } from 'react';

function ProductElement(props) {
  function addToCart() {
    props.add((arrayViejito) => [
      ...arrayViejito,
      { name: props.name, price: props.price, description: props.description },
    ]);
  }

  return (
    <div class="card col-3 m-2">
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text"> {props.description} </p>

        <div className="d-flex justify-content-around col-12">
          <button className="btn btn-outline-secondary"> ${props.price} </button>

          <button type="button" className="btn btn-success" onClick={addToCart}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductList(props) {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    // Fetch Pokemon data from the PokeAPI
    fetch('https://pokeapi.co/api/v2/pokemon?limit=6')
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data.results);
      })
      .catch((error) => {
        console.error('Error fetching Pokemon data:', error);
      });
  }, []);

  useEffect(() => {
    // Obtengo información adicional para cada Pokémon para determinar el precio.
    const fetchPokemonDetails = async () => {
      const updatedPokemonData = await Promise.all(
        pokemonData.map(async (pokemon) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          const data = await response.json();
          const price = data.base_experience *50; // ajusto el precio multiplicando por 50

          return { ...pokemon, price };
        })
      );
      setPokemonData(updatedPokemonData);
    };

    if (pokemonData.length > 0) {
      fetchPokemonDetails();
    }
  }, [pokemonData]);

  return (
    <div className="col-8 d-flex flex-wrap justify-content-around">
      <h3 className="col-12 d-flex justify-content-center">Catalogo</h3>

      {pokemonData.map((pokemon, index) => (
        <ProductElement
          key={index}
          name={pokemon.name}
          price={pokemon.price}
          description={`Pokemon ${pokemon.name}`}
          img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
          add={props.setSelectItem}
        />
      ))}
    </div>
  );
}
