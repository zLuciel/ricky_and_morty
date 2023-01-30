import styled from "styled-components";

export const ContainerMain = styled.main`
height: calc(100vh - 50px);
display: flex;
justify-content: center;
align-items: center;

`
export const FlexMain = styled.div`
/*border: 1px solid greenyellow;*/
width: 1800px;
min-width: 1349px;
display: flex;
justify-content: center;
align-items: center;
column-gap: 50px;

.main-info{
    /*border: 1px solid red;*/
    max-width: 700px;
    h1{
        font-size: 5.8rem;
        color: greenyellow;
    }
    p{
        font-family: 'Istok Web';
        font-size: 1.2rem;
        margin-bottom:15px;
    }
    button{
        font-weight: 700;
        font-family: "normal";
        cursor: pointer;
        background: greenyellow;
        width: 160px;
        padding: 8px 10px;
        border: none;
        height: 35px;
        border-radius: 2px;
        text-transform: uppercase;
        margin-bottom: 40px;
    }
    .video-main{
        overflow: hidden;
        border-radius: 10px;
        width: 500px;
        height: 280px;
        background: gray;
        video{
            
            width: 100%;
            height: auto;
        }
    }
}
.main-img{
    animation: subir 1.8s infinite alternate ease-in-out;
    width: 800px;
    img{
        width: 100%;
        height: 100%;
    }
    @keyframes subir {
        0%{
            transform: translateY(10px);
        }
        100%{
            transform: translateY(-10px);
        }
    }
}
`