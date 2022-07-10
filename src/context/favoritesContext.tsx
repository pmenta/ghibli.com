import React, { createContext, useState, useEffect, useContext } from 'react'

interface IFavoritesContext {
  favorites: string[]
  handleFavorite: (id: string) => void
}

const contextDefaultValues: IFavoritesContext = {
  favorites: [],
  handleFavorite: () => {},
}

export const FavoritesContext =
  createContext<IFavoritesContext>(contextDefaultValues)

export default function FavoritesProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [favorites, setFavorites] = useState<string[]>(
    contextDefaultValues.favorites
  )

  useEffect(() => {
    const localFavorites = localStorage.getItem('@favorites')

    if (localFavorites) {
      const favoritesData = JSON.parse(localFavorites)
      setFavorites(favoritesData)
    }
  }, [])

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem('@favorites', JSON.stringify(favorites))
    }
  }, [favorites])

  const handleFavorite = (favoriteId: string) => {
    if (favorites.includes(favoriteId)) {
      const newFavorites = favorites.filter(
        (favorite) => favorite !== favoriteId
      )
      setFavorites(newFavorites)
      localStorage.setItem('@favorites', JSON.stringify(newFavorites))
    } else {
      setFavorites((favorites) => [...favorites, favoriteId])
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        handleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavoritesContext() {
  return useContext(FavoritesContext)
}
