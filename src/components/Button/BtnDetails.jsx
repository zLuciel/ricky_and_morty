import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BtnPersonajePage } from '../css/BtnPersonaje'

const BtnDetails = ({side,ruta}) => {
    const navigate = useNavigate()
    const handlePage = ()=>{navigate(ruta)}
  return (
<BtnPersonajePage onClick={handlePage} direction={side}>
    <span className="hover-underline-animation">{side}</span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</BtnPersonajePage>
  )
}

export default BtnDetails
