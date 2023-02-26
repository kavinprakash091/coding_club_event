import { useReducer, createContext } from 'react';

export const Store = createContext();

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,

  userList: localStorage.getItem('userList')
    ? JSON.parse(localStorage.getItem('userList'))
    : [],
  stages: localStorage.getItem('stages')
    ? JSON.parse(localStorage.getItem('stages'))
    : [],
  isAdmin: localStorage.getItem('isAdmin')
    ? localStorage.getItem('isAdmin')
    : false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'USER_SIGNIN':
      return { ...state, userInfo: action.payload };
    case 'USER_LISTS':
      return { ...state, userList: action.payload };
    case 'STAGE':
      return { ...state, stages: action.payload };
    case 'ADMIN':
      return { ...state, isAdmin: action.payload };
    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}> {props.children} </Store.Provider>;
}
