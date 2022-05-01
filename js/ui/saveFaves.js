export function saveFaves(faves) {
  localStorage.setItem("favourites", JSON.stringify(faves));
}
