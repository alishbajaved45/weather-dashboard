import React from "react";

/**
 * SearchBar
 * ----------
 * Receives `searchTerm` and `onSearchChange` as props. It holds NO
 * state of its own for the search text — this is what makes it a
 * "controlled" component. Every keystroke calls onSearchChange, which
 * is really App's setSearchTerm, handed down through props. The child
 * never updates itself directly; it only ever asks the parent to.
 */
export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-wrap">
      <span className="search-icon" aria-hidden="true">🔍</span>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search a city..."
        className="search-input"
        aria-label="Search cities"
      />

      {/* Conditional rendering: the clear (×) button only exists
          in the DOM at all when there's something to clear. */}
      {searchTerm && (
        <button
          onClick={() => onSearchChange("")}
          className="clear-btn"
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}
