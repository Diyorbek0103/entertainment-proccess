import { LOADING_FALSE, LOADING_TRUE } from "../actioanTypes/actionType";
import { GET_SINGLE_CINEMA, GET_SINGLE_CINEMA_CREDITS, GET_SINGLE_CINEMA_VIDEO, GET_TRENDING } from "../actionTypes/actionTypes";

const initialState = {
  trending: [],
  loading: false,
  trendingNumberOfPages: 1,
  singleCinema:[],
  singleCinemaVideo:'',
  singleCinemaCredits:[],

};

export const entertainmentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING_TRUE:
      return { ...state, loading: true };
    case LOADING_FALSE:
      return { ...state, loading: false };
    case GET_TRENDING:
      return {
        ...state,
        trending: payload.results,
        trendingNumberOfPages:payload.total_pages,  
        loading: false,
      };
    case GET_SINGLE_CINEMA:
      
      return {
        ...state,
        singleCinema: payload,
      
        loading: false,
      };
    case GET_SINGLE_CINEMA_VIDEO:
     
      return {
        ...state,
        singleCinemaVideo: payload.results[0].key,
        loading: false,
      };
    case GET_SINGLE_CINEMA_CREDITS:
     
      return {
        ...state,
        singleCinemaCredits: payload.cast,
        loading: false,
      };
    default:
      return state;
  }
};
