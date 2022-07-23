import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LC_FAV_KEY = "rfk";

interface GitHubState {
    favourites: string[];
}

const initialState: GitHubState = {
    favourites: JSON.parse(localStorage.getItem(LC_FAV_KEY) ?? "[]"),
};

export const gitHubSlice = createSlice({
    name: "github",
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload);
            localStorage.setItem(LC_FAV_KEY, JSON.stringify(state.favourites));
        },
        removeFavourite(state, action: PayloadAction<string>) {
            state.favourites = state.favourites.filter(
                (f) => f !== action.payload
            );
            localStorage.setItem(LC_FAV_KEY, JSON.stringify(state.favourites));
        },
    },
});

export const githubActions = gitHubSlice.actions;
export const githubReducer = gitHubSlice.reducer;
