import { LOADING_FALSE, LOADING_TRUE } from "../actioanTypes/actionType"

const initialState = {
    trending:[],
    loading:false,
}

export const entertainmentReducer = (state = initialState,action) => {
  const {type,payload}=action
  switch (type) {

  case LOADING_TRUE:
    return { ...state,loading:payload }
case LOADING_FALSE:
    return{...state,loading:false}
  default:
    return state
  }
}
