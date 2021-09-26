import { createContext, useReducer } from "react";
import { IActions, ITransactionUiState } from "../../../Types";
import TransactionUiReducer from "./TransactionUiReducer";

const initialState: ITransactionUiState = {
  inputValue: "",
  isPlus: false,
  showNumPad: false,
  transactionSelectedCategory: "",
  transactionSelectedAccount: "",
  transactionSelectedDate: "",
}


type ITransactionUiContext = {
  TransactionUiState: ITransactionUiState;
  transactionUiDispatch: React.Dispatch<IActions>;
}

const defaultDispatch: ITransactionUiContext["transactionUiDispatch"] = () => initialState // we never actually use this

export const TransactionUiStore = createContext<ITransactionUiContext>({
  TransactionUiState: initialState, 
  transactionUiDispatch: defaultDispatch, // just to mock out the dispatch type and make it not optioanl
});

export const TransactionUiContext: React.FC = ({children}) => {
  const [TransactionUiState, transactionUiDispatch] = useReducer(TransactionUiReducer, initialState);

  return (
    <TransactionUiStore.Provider value={{TransactionUiState, transactionUiDispatch}}>
      {children}
    </TransactionUiStore.Provider>
  );
}