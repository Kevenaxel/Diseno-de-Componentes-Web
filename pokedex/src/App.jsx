import { useState } from "react";
import { usePokemon } from "./hooks/usePokemon";
import { PokemonCard } from "./components/PokemonCard";
import { SearchBar } from "./components/SearchBar";
import "./App.css";

function App() {
  const { pokemonList, loading, error } = usePokemon(150);
  const [search, setSearch] = useState("");

  const filtered = pokemonList.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="app">
      <header>
        <h1>Pokédex</h1>
        <SearchBar value={search} onChange={setSearch} />
      </header>

      {loading ? (
        <div className="loading">Cargando Pokémon...</div>
      ) : (
        <main className="grid">
          {filtered.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </main>
      )}
    </div>
  );
}
