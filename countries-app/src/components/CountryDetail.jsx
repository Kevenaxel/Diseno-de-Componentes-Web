import { useState, useEffect } from "react";

export function CountryDetail({ code, getByCode, onBack }) {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getByCode(code).then((data) => {
      setCountry(data);
      setLoading(false);
    });
  }, [code]);

  if (loading) return <p>Cargando...</p>;
  if (!country) return <p>No encontrado.</p>;

  const { name, flags, population, region, subregion, capital, currencies, languages } = country;

  const currencyList = Object.values(currencies ?? {}).map((c) => c.name).join(", ");
  const languageList = Object.values(languages ?? {}).join(", ");

  return (
    <div>
      <button onClick={onBack} style={{ marginBottom: "24px", padding: "8px 16px", borderRadius: "8px", cursor: "pointer" }}>
        ← Volver
      </button>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
        <img src={flags.svg} alt={name.common} style={{ width: "100%", borderRadius: "8px" }} />
        <div>
          <h2 style={{ marginTop: 0 }}>{name.common}</h2>
          <p><strong>Nombre oficial:</strong> {name.official}</p>
          <p><strong>Capital:</strong> {capital?.[0]}</p>
          <p><strong>Región:</strong> {region} — {subregion}</p>
          <p><strong>Población:</strong> {population.toLocaleString()}</p>
          <p><strong>Monedas:</strong> {currencyList || "N/A"}</p>
          <p><strong>Idiomas:</strong> {languageList || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}