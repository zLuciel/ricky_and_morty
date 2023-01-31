import styled from "styled-components";

export const Cabezera = styled.header`
position: sticky;
display: flex;
justify-content: center;
width: 100%;
.container-flex-header{
    width: 82%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    @media screen and (max-width: 1593px){
    width: 95%;
   }
}
`

export const ContainerNav = styled.nav`
ul{
    display: flex;
    column-gap: 50px;
    list-style: none;
}
.link{
    color: white;
    text-decoration: none;
    :hover{
        color: greenyellow;
    }
}
@media screen and (max-width: 1074px){
display: none;
}
`