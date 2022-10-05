import React, { createContext, useReducer, Dispatch } from "react";
import {
  contactReducer,
  ProductActions,
} from "./contactReducer";

type Contact = {
  id: number;
  first_name: string;
  last_name: string;
};

type InitialStateType = {
  contacts: Contact[];
};

const initialState = {
  contacts: [],
};

const FavoriteContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
  { contacts }: InitialStateType,
  action: ProductActions 
) => ({
  contacts: contactReducer(contacts, action)
});

type Props = {
  children: JSX.Element
}

const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <FavoriteContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export { AppProvider, FavoriteContext };
