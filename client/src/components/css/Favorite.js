import styled from "styled-components";

export const ContainerFavorite = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: max-content;
.titulo-favorite{
    font-size: 3rem;
    line-height:3;
    color: greenyellow;
@media screen and (max-width: 1000px){
 font-size: 2rem;
 }
}

`