import { useNavigate, useParams } from "react-router-dom";
import {BtnPersonajePage}  from "../css/BtnPersonaje"


export const BtnPersonaje = ({side,page,numPages,setPage,details}) => {

    const navigate = useNavigate()
    const current = useParams()
    const Location = Object.keys(current)[0]

    const handlePage = ()=>{
        window.scroll(0, 0); 
       if(side ==="back") {
        setPage(Number(numPages[Location]) - 1)
        navigate(`/personajes/${details}${page - 1}`)
       }else{ 
         setPage(Number(numPages[Location]) + 1)
        navigate(`/personajes/${details}${page + 1}`)
       }
    }

  return (
    <BtnPersonajePage onClick={handlePage} direction={side}>
    <span className="hover-underline-animation">{side}</span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</BtnPersonajePage>
  )
}
