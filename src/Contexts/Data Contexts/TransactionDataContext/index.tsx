import { createContext, useReducer } from "react";
import { IActions, ITransactionDataState } from "../../../Types";
import TransactionDataReducer from "./TransactionDataReducer";

const initialState: ITransactionDataState = [
]

type ITransactionDataContext = {
  TransactionDataState: ITransactionDataState;
  transactionDataDispatch: React.Dispatch<IActions>;
}

const defaultDispatch: ITransactionDataContext["transactionDataDispatch"] = () => initialState // we never actually use this

export const TransactionDataStore = createContext<ITransactionDataContext>({
  TransactionDataState: initialState, 
  transactionDataDispatch: defaultDispatch, // just to mock out the dispatch type and make it not optioanl
});

export const TransactionDataContext: React.FC = ({children}) => {
  const [TransactionDataState, transactionDataDispatch] = useReducer(TransactionDataReducer, initialState);

  return (
    <TransactionDataStore.Provider value={{TransactionDataState, transactionDataDispatch}}>
      {children}
    </TransactionDataStore.Provider>
  );
}