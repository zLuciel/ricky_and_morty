import { useEffect, useState } from 'react'

export const useResize = () => {
    const [witdhX,setWitdhX] = useState(0)
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            const witdh = document.documentElement.clientWidth
            setWitdhX(witdh)
          });
    })

  return witdhX
}
