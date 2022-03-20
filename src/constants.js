import Homepage from "./pages/Homepage";
import CharacterDetail from "./pages/CharacterDetail";

// TODO: Check dynamic root mechanism
export const ROUTES = [
  { path: "/", page: Homepage, exact: true },
  { path: "/character/:characterId", page: CharacterDetail, exact: false },
];

export const API_BASE_URL = "https://rickandmortyapi.com/api";
