import styled from "styled-components";

export const ContainerAbout = styled.div`
 width: 100%;
 height: calc(100vh - 80px);
 display: flex;
 justify-content: center;
 align-items: center;
.card-about{
width: 1139px;
height: 453px;
background: rgba(0, 0, 0, 0.25);
backdrop-filter: blur(12.5px);
border-radius: 15px;
padding: 50px;
//**Responsive */
@media screen and (max-width: 1187px){
 width: 800px;
 height: 400px;
}
@media screen and (max-width: 852px){
 width: 580px;
}
@media screen and (max-width: 628px){
 width: 400px;
 height: 340px;
}
@media screen and (max-width: 375px){
 width: 300px;
 height: 300px;
}
 }
 .info-about{
    h1{
        line-height: 1;
        font-size: 5rem;
        font-family: 'Bebas Neue';
        text-transform: uppercase;
        b{
            color: greenyellow;
        }
    }
    p{
        margin: 5px 0;
        max-width: 70%;
        font-size: 1.2rem;
        font-family: 'Unna';
    }
//**Responsive */
@media screen and (max-width: 628px){
    h1{
        font-size: 3rem;
    }
 p{
    max-width: none;
 }
}
@media screen and (max-width: 375px){
    h1{
        font-size: 2rem;
    }
    p{
        font-size: 1rem;
    }
 }

}
`