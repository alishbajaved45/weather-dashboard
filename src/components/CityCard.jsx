import React from "react";
import { CONDITION_META } from "../data/cities";

/**
 * CityCard
 * ----------
 * A "dumb" / presentational component: it renders exactly what it's
 * handed and reports one event (refresh click) upward. It never reads
 * from the CITIES array directly and never manages loading state
 * itself — App owns loadingCityId, and just tells this card, via the
 * `isLoading` prop, whether it should be true for THIS card.
 */
export default function CityCard({ city, isLoading, onRefresh }) {
  const meta = CONDITION_META[city.condition];

  return (
    <div className="card" style={{ background: meta.bg }}>
      <div className="card-header">
        <div>
          <div className="city-name">📍 {city.name}</div>
          <div className="country">{city.country}</div>
        </div>

        <button
          onClick={() => onRefresh(city.id)}
          className="refresh-btn"
          aria-label={`Refresh ${city.name}`}
          disabled={isLoading}
        >
          <span className={isLoading ? "spin" : ""}>↻</span>
        </button>
      </div>

      {isLoading ? (
        <div className="skeleton-block" />
      ) : (
        <>
          <div className="temp-row">
            <span className="condition-icon">{meta.icon}</span>
            <span className="temp">{city.tempC}°C</span>
          </div>
          <div className="meta-row">
            <span>💧 {city.humidity}%</span>
            <span>💨 {city.wind} km/h</span>
            <span style={{ color: meta.tint }}>{meta.label}</span>
          </div>
        </>
      )}
    </div>
  );
}
