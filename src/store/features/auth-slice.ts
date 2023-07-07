import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {boolean} from "zod";

interface InitialState {
  value: AuthState
}

interface AuthState {
  isAuth: boolean,
  login: string;
  password: string
}

const initialState = {
  value: {
    isAuth: false,
    login: "",
    password: ""
  } as AuthState
} as InitialState
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => initialState,
    logIn: (state, action: PayloadAction<{login: string, password: string}>) => {
      return {
        value: {
          ...action.payload,
          isAuth: true
        }
      }
    }
  }
})

export const {logIn, logOut} = auth.actions
export default auth.reducer