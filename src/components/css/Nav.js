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
`