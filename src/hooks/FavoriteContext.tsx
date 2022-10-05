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
  products: Contact[];
};

const initialState = {
  products: [],
};

const FavoriteContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
  { products }: InitialStateType,
  action: ProductActions 
) => ({
  products: contactReducer(products, action)
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
