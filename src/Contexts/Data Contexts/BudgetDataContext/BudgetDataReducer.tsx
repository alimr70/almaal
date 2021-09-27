import { IActions, IBudgetDataState } from "../../../Types";

const BudgetDataReducer = (state: IBudgetDataState, action: IActions) => {
  switch(action.type){
    case "ADD_Budget":
      return state;

    case "ADD_OR_SUBTRACT_AMOUNT":
      return addOrSubtractAccountAmount(state, action.payload.categoryId!, action.payload.handleAmount!);

    default:
      return state;
  }
}

const addOrSubtractAccountAmount = (state: IBudgetDataState, categoryId: string, handleAmount: number) => {
  const {categories} = state;
  const targetCategory = categories.find(cat => cat.id === categoryId);
  const categoryIndex = categories.indexOf(targetCategory!);
  const newCategories = categories.filter(cat => cat.id !== targetCategory?.id);

  const modifiedCategory = {
    ...targetCategory!,
    availableToSpend: targetCategory?.availableToSpend! + handleAmount
  }

  newCategories.splice(categoryIndex,0,modifiedCategory);
  return {...state, categories: newCategories}
}

export default BudgetDataReducer;