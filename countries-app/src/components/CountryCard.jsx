export function CountryCard({ country, onClick }) {
  const { name, flags, population, region, capital } = country;

  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <img
        src={flags.svg}
        alt={`Bandera de ${name.common}`}
        style={{ width: "100%", height: "140px", objectFit: "cover" }}
      />
      <div style={{ padding: "16px" }}>
        <h3 style={{ margin: "0 0 8px", fontSize: "16px" }}>{name.common}</h3>
        <p style={{ margin: "4px 0", fontSize: "13px", color: "#6b7280" }}>
          <strong>Región:</strong> {region}
        </p>
        <p style={{ margin: "4px 0", fontSize: "13px", color: "#6b7280" }}>
          <strong>Población:</strong> {population.toLocaleString()}
        </p>
        <p style={{ margin: "4px 0", fontSize: "13px", color: "#6b7280" }}>
          <strong>Capital:</strong> {capital?.[0] ?? "N/A"}
        </p>
      </div>
    </div>
  );
}