import React from 'react'
import { NavLink } from 'react-router-dom'
import { SkipBack } from './css/BtnPages'
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from 'react-icons/bs';
export const BtnPages = ({page,numPages,setPage}) => {

    const handleSkip = () => {window.scroll(0, 0); setPage(Number(numPages.pages) + 1)};
    const handleBack = () => {window.scroll(0, 0); setPage(Number(numPages.pages) - 1)};
    
  return (
    <SkipBack>
        <NavLink className="Link-Back" to={`/personajes/${page - 1}`}>
         <BsFillArrowLeftCircleFill className='btn-back' onClick={() => handleBack()} />
         
        </NavLink>
        <NavLink className="Link-Skip" to={`/personajes/${page + 1}`}>
          <BsFillArrowRightCircleFill className='btn-skip' onClick={() => handleSkip()}/>
        </NavLink>
      </SkipBack>
  )
}
