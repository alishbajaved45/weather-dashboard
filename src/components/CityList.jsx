import React from "react";
import CityCard from "./CityCard";

/**
 * CityList
 * ----------
 * Sits between App and CityCard. It doesn't know WHY the array might
 * be short (a search filter applied in App) or empty — it just renders
 * whatever `cities` array it's given. This separation means CityList
 * can be reused anywhere a list of cities needs rendering, regardless
 * of how that list was produced.
 */
export default function CityList({ cities, loadingCityId, onRefresh }) {
  // Conditional rendering (empty state): an early return means the
  // rest of this component never has to think about the empty case.
  if (cities.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-title">No cities match your search</p>
        <p className="empty-sub">Try a different name, or clear the search box.</p>
      </div>
    );
  }

  return (
    <div className="grid">
      {cities.map((city) => (
        // key={city.id}: a stable, data-derived id — NOT the array
        // index — so React can correctly track each card across
        // re-renders even as the filtered list grows or shrinks.
        <CityCard
          key={city.id}
          city={city}
          isLoading={loadingCityId === city.id}
          onRefresh={onRefresh}
        />
      ))}
    </div>
  );
}
