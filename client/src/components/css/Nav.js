import styled from "styled-components";

export const Cabezera = styled.header`
position: sticky;
display: flex;
z-index: 40;
justify-content: center;
width: 100%;
.container-flex-header{
    width: 82%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    @media screen and (max-width: 1593px){
    width: 95%;
   }
   @media screen and (max-width: 1298px){
    width: 85%;
   }
   @media screen and (max-width: 1181px){
    width: 90%;
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
    .icon-login{
        font-size: 1.4rem;
        color: greenyellow;
    }
}
@media screen and (max-width: 902px){
  display:  ${props => props.mostrar ? "flex" : "none"};
ul{
    display:  ${props => props.mostrar ? "flex" : "none"};
    row-gap: 10px;
    flex-direction: column;
    li{
        font-size: 1.2rem;
    }
}
}
`