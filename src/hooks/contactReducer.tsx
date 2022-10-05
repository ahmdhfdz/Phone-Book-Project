type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  Add = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
}

type Contact = {
  id: number;
  first_name: string;
  last_name: string;
};

type ProductPayload = {
  [Types.Add]: {
    id: number;
    first_name: string;
    last_name: string;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
  ProductPayload
>];

export const contactReducer = (
  state: Contact[],
  action: ProductActions 
) => {
  switch (action.type) {
    case Types.Add:
      return [
        ...state,
        {
          id: action.payload.id,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name
        }
      ];
    case Types.Delete:
      return [...state.filter(product => product.id !== action.payload.id)];
    default:
      return state;
  }
};
