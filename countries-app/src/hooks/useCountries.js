import { useState, useEffect } from "react";

const BASE_URL = "https://restcountries.com/v3.1";

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  // Carga todos los países al montar
  useEffect(() => {
    fetchAll();
  }, []);

  async function fetchAll() {
    try {
      setLoading(true);
      setError(null);
      const res  = await fetch(`${BASE_URL}/all?fields=name,flags,population,region,capital,cca3`);
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const data = await res.json();
      setCountries(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function searchByName(name) {
    if (!name.trim()) return fetchAll();
    try {
      setLoading(true);
      setError(null);
      const res  = await fetch(`${BASE_URL}/name/${name}?fields=name,flags,population,region,capital,cca3`);
      if (!res.ok) throw new Error("País no encontrado");
      const data = await res.json();
      setCountries(data);
    } catch (err) {
      setError(err.message);
      setCountries([]);
    } finally {
      setLoading(false);
    }
  }

  async function getByCode(code) {
    const res  = await fetch(`${BASE_URL}/alpha/${code}`);
    if (!res.ok) throw new Error("No encontrado");
    const data = await res.json();
    return data[0];
  }

  return { countries, loading, error, searchByName, getByCode };
}
