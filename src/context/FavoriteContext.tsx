import React, { createContext, useReducer } from 'react';

interface Movie {
    id: number;
    poster_path?: string;
    title: string;
    overview: string;
    vote_average: string;
    release_date: string;
}

interface State {
    favorites: Movie[];
}

interface FavoriteAction {
    type: string;
    payload: Movie;
}

const INITIAL_STATE = {
    favorites: [],
};

const FavoriteReducer = (state: State, action: FavoriteAction) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return { favorites: [...state.favorites, action.payload] };
        case 'REMOVE_MOVIE':
            return {
                favorites: [...state.favorites.filter((item) => item.id !== action.payload.id)],
            };
        default:
            return state;
    }
};

export const FavoriteContext = createContext<{
    state: State;
    dispatch: React.Dispatch<FavoriteAction>;
}>({ state: INITIAL_STATE, dispatch: () => {} });

interface ProviderProps {
    children: React.ReactNode;
}

export const FavoriteContextProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(FavoriteReducer, INITIAL_STATE);
    return (
        <FavoriteContext.Provider value={{ state, dispatch }}>{children}</FavoriteContext.Provider>
    );
};
