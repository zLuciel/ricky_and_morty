import styled from "styled-components";

export const ContainerLoading = styled.div`
height: calc(100vh - 50px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
div{
    width:500px;
    height: 400px;
    img{
        width: 100%;
        height: 100%;
    }
}
h1{
    font-size: 2rem;
}
`