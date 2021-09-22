import { createContext, useReducer } from "react";
import { ITransactionState } from "../../Types";
import TransactionReducer from "./TransactionReducer";

const initialState: ITransactionState = {
  inputValue: "",
  plus: false,
  showNumPad: false,
}

export const TransactionStore = createContext<any>(initialState);

export const TransactionContext: React.FC = ({children}) => {
  const [TransactionState, transactionDispatch] = useReducer(TransactionReducer, initialState);

  return (
    <TransactionStore.Provider value={{TransactionState, transactionDispatch}}>
      {children}
    </TransactionStore.Provider>
  );
}