import { LOADING_FALSE, LOADING_TRUE } from "../actioanTypes/actionType";
import axios from "axios";
import { PATH_NAME } from "../../tools/constant";
import { APIKey } from "../../APIKey";
import { GET_SINGLE_CINEMA, GET_SINGLE_CINEMA_CREDITS, GET_SINGLE_CINEMA_VIDEO, GET_TRENDING } from "../actionTypes/actionTypes";

export const getTrending = (page) => async (dispatch) => {
  dispatch({
    type:LOADING_TRUE
  })
try {
  const res=await axios.get(`${PATH_NAME}/trending/all/week?api_key=${APIKey}&page=${page}`);
  dispatch({
    type:GET_TRENDING,
    payload:res.data
  })
} catch (error) {
  dispatch({
    type:LOADING_FALSE
  })
}
  
};


export const getSingleCinema = (cinema_type,cinema_id) => async (dispatch) => {
  dispatch({
    type:LOADING_TRUE
  })
try {
  const res=await axios.get(`${PATH_NAME}/${cinema_type}/${cinema_id}?api_key=${APIKey}&language=en-US`);

  dispatch({
    type:GET_SINGLE_CINEMA,
    payload:res.data
  })
} catch (error) {
  dispatch({
    type:LOADING_FALSE
  })
}
  
};


export const getSingleCinemaVideo = (cinema_type,cinema_id) => async (dispatch) => {
  dispatch({
    type:LOADING_TRUE
  })
try {
  const res=await axios.get(`${PATH_NAME}/${cinema_type}/${cinema_id}/videos?api_key=${APIKey}&language=en-US`);
  dispatch({
    type:GET_SINGLE_CINEMA_VIDEO,
    payload:res.data
  })
} catch (error) {
  dispatch({
    type:LOADING_FALSE
  })
}
  
};


export const getSingleCinemaCredits = (cinema_type,cinema_id) => async (dispatch) => {
  dispatch({
    type:LOADING_TRUE
  })
try {
  const res=await axios.get(`${PATH_NAME}/${cinema_type}/${cinema_id}/credits?api_key=${APIKey}&language=en-US`);
  dispatch({
    type:GET_SINGLE_CINEMA_CREDITS,
    payload:res.data
  })
} catch (error) {
  dispatch({
    type:LOADING_FALSE
  })
}
  
};