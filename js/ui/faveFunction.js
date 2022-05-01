export function getExistingFaves() {
    const faves = localStorage.getItem("favourites");
  
    if (faves === null) {
      return [];
    } else {
      return JSON.parse(faves);
    }
  }