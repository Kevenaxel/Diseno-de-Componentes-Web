import { useState } from "react";

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar país..."
        style={{ flex: 1, padding: "8px 12px", borderRadius: "8px", border: "1px solid #ccc" }}
      />
      <button type="submit" style={{ padding: "8px 16px", borderRadius: "8px", cursor: "pointer" }}>
        Buscar
      </button>
      <button type="button" onClick={() => { setQuery(""); onSearch(""); }}>
        Limpiar
      </button>
    </form>
  );
}