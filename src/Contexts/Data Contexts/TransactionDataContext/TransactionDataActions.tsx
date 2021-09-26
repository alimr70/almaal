import { ITransaction } from "../../../Types"

export const addTransaction = (transaction: ITransaction) => {
  return {
    type: "ADD_TRANSACTION",
    payload: {
      transaction
    }
  }
}
