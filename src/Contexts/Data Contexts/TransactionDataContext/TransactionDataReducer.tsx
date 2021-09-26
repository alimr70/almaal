import { IActions, ITransaction, ITransactionDataState } from "../../../Types";

const TransactionDataReducer = (state: ITransactionDataState, action: IActions) => {
  switch(action.type){
    case "ADD_TRANSACTION":
      return addTransaction(state, action.payload.transaction!);

    default:
      return state;
  }
}

const addTransaction = (state: ITransactionDataState, transaction: ITransaction) => {
  return [transaction, ...state];
}

export default TransactionDataReducer;