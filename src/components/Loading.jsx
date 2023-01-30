import React from 'react'
import load from "../assets/loading.png"
import { ContainerLoading } from './css/Loading'
const Loading = () => {
  return (
    <ContainerLoading>
      <div>
        <img src={load} alt="" />
      </div>
      <h1>Loading...</h1>
    </ContainerLoading>
  )
}

export default Loading
