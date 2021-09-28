import { IActions, IHomeDataState } from "../../../Types";

const HomeDataReducer = (state: IHomeDataState, action:IActions) => {
  switch(action.type){
    case "SET_SADAQAH_PERCENTAGE":
      return setSadaqahPercentage(state, action.payload.handleAmount!);

    default:
      return state;
  }
}

const setSadaqahPercentage = (state: IHomeDataState, handleAmount: number) => {
  return {...state, sadaqah:{...state.sadaqah, PercentageToBeCut: handleAmount}};
};

export default HomeDataReducer;