import React from 'react'
import useFetch from '../hook/useFetch'
import Loading from './user/loading/Loading';

export default function Test() {
    const {data,error,loading}=useFetch('https://dummyjson.com/test');
    console.log(data,error,loading);

    if(loading){
        return <Loading/>
    }
    else
  return (
    <div>
      {error?<div className='alert alert-danger'>{error}</div>:""}
      {data?"there is data":"no data"}
    </div>
  )
}
