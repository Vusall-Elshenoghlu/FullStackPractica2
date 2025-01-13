import React, { createContext, useEffect, useState } from 'react';
import Swal from "sweetalert2";

export const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  let localFavorites = [];
  try {
    localFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  } catch (error) {
    console.error("Failed to parse favorites from localStorage:", error);
  }

  let [favorites, setFavorites] = useState(localFavorites);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addToFavorites(human) {
    let findedFavorite = favorites.find(item => item.id === human.id);
    if (findedFavorite) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "This product is already in your wishlist!",
      });
    } else {
      setFavorites([...favorites, human]);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Added to your wishlist!",
      });
    }
  }

  function removeFromFavorites(humanID) {
    if (!humanID) {
      console.error("Invalid humanID provided");
      return;
    }
    let filteredFavorites = favorites.filter(favorite => favorite.id !== humanID);
    setFavorites(filteredFavorites);
    Swal.fire({
      icon: "success",
      title: "Removed",
      text: "Removed from your wishlist!",
    });
  }

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;
