import { IAccountsDataState, IActions } from "../../../Types";

const AccountsDataReducer = (state: IAccountsDataState, action: IActions) => {
  switch(action.type){
    case "ADD_ACCOUNT":
      return state;

    default:
      return state;
  }
}

export default AccountsDataReducer;