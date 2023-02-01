import { useState } from 'react';
import { ContainerFilters } from './css/Filters'
import { MdArrowDropDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Filters = ({setGender,lis,setQuery,name}) => {
  const [mostrar, setMostrar] = useState(false);
  const opciones = () => {
    mostrar === false ? setMostrar(true) : setMostrar(false);
  };

  const handleAll = (e)=> {
    setGender(e.target.innerText)
    setMostrar(false)
    setQuery(name)
  }
  

  return (
    <ContainerFilters mostrar={mostrar}>
      <div className='container-selector'>
        <div   onClick={opciones}>
          <span className='select-name'>{name}<MdArrowDropDown className='icon-filter'/></span>
        </div>
        <ul className='options'>
          {
            lis.map(li=>  <li onClick={handleAll} className='option'>{li}</li>)
          }
        </ul>
      </div>
    </ContainerFilters>
  )
}

export default Filters
