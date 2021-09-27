import { IAccountsDataState, IActions } from "../../../Types";

const AccountsDataReducer = (state: IAccountsDataState, action: IActions) => {
  switch(action.type){
    case "ADD_ACCOUNT":
      return state;

    case "ADD_OR_SUBTRACT_AMOUNT":
      return addOrSubtractAccountAmount(state, action.payload.accountId!, action.payload.handleAmount!);

    default:
      return state;
  }
}

const addOrSubtractAccountAmount = (state: IAccountsDataState, accountId: string , handleAmount: number) => {
  const targetAccount = state.find(acc => acc.id === accountId);
  const accountIndex = state.indexOf(targetAccount!);
  const newState = state.filter(acc => acc.id !== targetAccount?.id);

  const modifiedTargetAccount = {
    ...targetAccount!,
    amount: targetAccount?.amount! + handleAmount,
  }

  newState.splice(accountIndex,0,modifiedTargetAccount);
  return newState;
}

export default AccountsDataReducer;