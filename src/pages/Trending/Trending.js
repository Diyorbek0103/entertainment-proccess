import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { LoadingTrue } from '../../redux/actions/entertainmentActions';
export const Trending = () => {
const {loading}=useSelector(state=>state.entertainmentReducer);
const dispatch=useDispatch();
const Loading=()=>{
  dispatch(LoadingTrue())
}
  return (
    <div>
      <button onClick={()=>Loading()}>change loading</button>
     {
      loading ? "loading true" : "loading false"
     }
    </div>
  )
}
