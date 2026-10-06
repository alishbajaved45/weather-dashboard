import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CityList from "./components/CityList";
import { CITIES } from "./data/cities";
import "./styles.css";

/**
 * App
 * ----------
 * This is the nearest common ancestor of SearchBar and CityList, so
 * this is where their SHARED state lives — this is "lifting state up."
 * Neither sibling can see the other directly; both talk only to App,
 * which passes data down as props and receives events back as
 * function calls (setSearchTerm, handleRefresh).
 */
export default function App() {
  // Lifted state #1: the search text. SearchBar reads+writes it,
  // CityList (indirectly, via App) reads the filtered result of it.
  const [searchTerm, setSearchTerm] = useState("");

  // Lifted state #2: which single city is "loading" right now.
  // Only one id at a time, so a plain value works — no need for an
  // array or a per-city boolean map for this simple case.
  const [loadingCityId, setLoadingCityId] = useState(null);

  // Derived value, recomputed every render — deliberately NOT stored
  // in its own useState. If it were separate state, it could go stale
  // whenever searchTerm changes and we forgot to re-sync it. Filtering
  // a 7-item array is cheap, so recomputing is simpler and safer.
  const filteredCities = CITIES.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  // Fake async refresh, standing in for a real fetch() call for one
  // city. Flips loadingCityId on, waits, flips it back to null.
  function handleRefresh(cityId) {
    setLoadingCityId(cityId);
    setTimeout(() => {
      setLoadingCityId(null);
    }, 900);
  }

  return (
    <div className="page">
      <header className="header">
        <h1 className="title">Weatherish</h1>
        <p className="subtitle">Search a city and see temperature, humidity and wind at a glance.</p>
      </header>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="count-row">
        {filteredCities.length} of {CITIES.length} cities shown
      </div>

      <CityList
        cities={filteredCities}
        loadingCityId={loadingCityId}
        onRefresh={handleRefresh}
      />
    </div>
  );
}
