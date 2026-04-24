import { useState } from "react";
import { useCountries } from "./hooks/useCountries";
import { SearchBar }    from "./components/SearchBar";
import { CountryCard }  from "./components/CountryCard";
import { CountryDetail } from "./components/CountryDetail";

export default function App() {
  const { countries, loading, error, searchByName, getByCode } = useCountries();
  const [selectedCode, setSelectedCode] = useState(null);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 16px", fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: "24px" }}> Explorador de Países</h1>

      {selectedCode ? (
        <CountryDetail
          code={selectedCode}
          getByCode={getByCode}
          onBack={() => setSelectedCode(null)}
        />
      ) : (
        <>
          <SearchBar onSearch={searchByName} />

          <div style={{ marginTop: "16px", minHeight: "24px" }}>
            {loading && <p>Cargando países...</p>}
            {error   && <p style={{ color: "red" }}>Error: {error}</p>}
            {!loading && !error && <p style={{ color: "#6b7280" }}>{countries.length} países encontrados</p>}
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "24px",
            marginTop: "8px",
          }}>
            {countries.map((c) => (
              <CountryCard
                key={c.cca3}
                country={c}
                onClick={() => setSelectedCode(c.cca3)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
} 