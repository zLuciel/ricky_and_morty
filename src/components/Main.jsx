import React from 'react'
import { ContainerImg, ContainerInfoContador, ContainerInfoMain, ContainerMain } from './css/Main'
import RickVideo from "../assets/videoRyck.mp4"
import {Redes} from "./Redes"
import CountUp from 'react-countup'
import { NavLink } from 'react-router-dom'

const Main = () => {
  
  return (
    <ContainerMain>
      <div className='grid-main'>
        
        <ContainerInfoMain>
            <h1>Discover all the characters <u>Rick and Morty</u></h1>
            <p className='sub-titulo'>Do not wait any longer and enjoy this incredible adventure with your favorite characters</p>
            <ContainerInfoContador>
                 <span className='barra uno'></span>
                 <span className='barra dos'></span>
                <span><h2><CountUp start={0} end={826} duration={2} />C</h2><p>Characters</p></span>
                <span><h2><CountUp start={0} end={42} duration={2} />P</h2><p>Pages</p></span>
                <span><h2><CountUp start={0} end={20} duration={2} />PC</h2><p>Pages Characters</p></span>
          </ContainerInfoContador>
            <div className='video-main'>
            <video  src={RickVideo} autoPlay muted controls loop></video>
            </div>
        </ContainerInfoMain>
         
        <ContainerImg>
          <div className='cont-redes'>
            <Redes />
          </div>
           <span className='info-img'>After being missing for almost 20 years, Rick Sanchez shows up unexpectedly on his daughter Beth's doorstep and moves in with her and her family, using the garage as his personal laboratory.</span>
           <NavLink to="/personajes/1" ><button>explore</button></NavLink> 
        </ContainerImg>
      </div>

    </ContainerMain>
  )
}

export default Main
