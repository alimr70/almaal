export const addOrSubtractCategoryAvailableToSpend = (categoryId:string , handleAmount: number) => {
  return {
    type: "ADD_OR_SUBTRACT_AMOUNT",
    payload: {
      categoryId,
      handleAmount
    }
  }
}