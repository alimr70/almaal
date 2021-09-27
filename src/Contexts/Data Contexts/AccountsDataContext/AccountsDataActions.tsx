export const addOrSubtractAccountAmount = (accountId:string , handleAmount: number) => {
  return {
    type: "ADD_OR_SUBTRACT_AMOUNT",
    payload: {
      accountId,
      handleAmount
    }
  }
}