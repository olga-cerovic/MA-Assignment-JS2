export function getExistingFaves() {
    const faves = localStorage.getItem("favourites");
    // console.log(faves);
  
    if (faves === null) {
      return [];
    } else {
      return JSON.parse(faves);
    }
  }