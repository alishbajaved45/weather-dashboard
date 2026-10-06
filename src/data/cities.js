// Hard-coded data standing in for an API response.
// Keeping it in its own file means that later, swapping this array for
// a real fetch() call only touches App.jsx — no component below it
// needs to change, because they only ever see "a list of city objects."
export const CITIES = [
  { id: 1, name: "Rawalpindi", country: "Pakistan", tempC: 34, condition: "sunny", humidity: 41, wind: 12 },
  { id: 2, name: "Reykjavik", country: "Iceland", tempC: 6, condition: "snowy", humidity: 78, wind: 27 },
  { id: 3, name: "Singapore", country: "Singapore", tempC: 29, condition: "rainy", humidity: 88, wind: 9 },
  { id: 4, name: "Nairobi", country: "Kenya", tempC: 21, condition: "cloudy", humidity: 55, wind: 14 },
  { id: 5, name: "Oslo", country: "Norway", tempC: 3, condition: "snowy", humidity: 70, wind: 19 },
  { id: 6, name: "Cairo", country: "Egypt", tempC: 38, condition: "sunny", humidity: 22, wind: 8 },
  { id: 7, name: "Lisbon", country: "Portugal", tempC: 24, condition: "cloudy", humidity: 60, wind: 16 },
];

// Lookup table for per-condition icon/label/color, kept next to the
// data it describes. Defined once at module scope (not inside a
// component) so it isn't recreated on every render.
export const CONDITION_META = {
  sunny: { icon: "☀️", label: "Sunny", tint: "#f59e0b", bg: "#3a2e12" },
  cloudy: { icon: "☁️", label: "Cloudy", tint: "#94a3b8", bg: "#252b36" },
  rainy: { icon: "🌧️", label: "Rainy", tint: "#38bdf8", bg: "#132433" },
  snowy: { icon: "❄️", label: "Snowy", tint: "#e0f2fe", bg: "#1c2a33" },
};