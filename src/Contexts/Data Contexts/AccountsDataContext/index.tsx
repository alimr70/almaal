import { createContext, useReducer } from "react";
import { IAccountsDataState, IActions } from "../../../Types";
import AccountsDataReducer from "./AccountsDataReducer";

const initialState: IAccountsDataState = [
  {
    id: "acc-541d651",
    title: "Monthly Paycheck",
    amount: 4500,
    type: "cash",
  },
  {
    id: "acc-d16f5sdf6",
    title: "Savings",
    amount: 1000,
    type: "savings",
  },
  {
    id: "acc-516d5f1",
    title: "Sadaqah",
    amount: 500,
    type: "debt",
  },
  {
    id: "acc-sadf516as",
    title: "Doge Coin",
    amount: 5000,
    type: "investment",
  },
];

type IAccountsContext = {
  AccountsDataState: IAccountsDataState;
  accountsDataDispatch: React.Dispatch<IActions>;
}

const defaultDispatch: IAccountsContext["accountsDataDispatch"] = () => initialState // we never actually use this

export const AccountsDataStore = createContext<IAccountsContext>({
  AccountsDataState: initialState,
  accountsDataDispatch: defaultDispatch, // just to mock out the dispatch type and make it not optioanl
});

export const AccountsDataContext: React.FC = ({children}) => {
  const [AccountsDataState, accountsDataDispatch] = useReducer(AccountsDataReducer, initialState);

  return (
    <AccountsDataStore.Provider value={{AccountsDataState, accountsDataDispatch}}>
      {children}
    </AccountsDataStore.Provider>
  );
}