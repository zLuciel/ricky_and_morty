import styled from "styled-components";

export const ContainerMain = styled.main`
height: calc(100vh - 50px);
display: flex;
justify-content: center;
align-items: center;

`
export const FlexMain = styled.div`
margin: 0 30px;
/*border: 1px solid greenyellow;*/
/*width: 1800px;
min-width: 1349px;*/
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
            height: 100%;
        }
    }
    @media screen and (max-width: 1488px) {
        max-width: 600px;
    h1{
        font-size: 4rem;
    }
    p{
        font-size: 1rem;
    }
    .video-main{
        width: 430px;
        height: max-content;
    }
  }
  //**Responsive*/
  @media screen and (max-width: 1277px){
   /* border: 1px solid red;*/
    max-width: 500px;
  }
 @media screen and (max-width: 1200px){
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
    /*width: 800px;
   min-width: 700px;*/
   max-width: 100%;
   h1,p{
    text-align: center;
   }
   .video-main{
    display: none;
   }
}
@media screen and (max-width: 555px){
  h1{
    font-size: 2rem;
  }
  p{
    font-size: 0.9rem;
  }
}

  //**FIN Responsie*/
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
//*Responsive*/
@media screen and (max-width: 1488px){
    width: 660px;
}
@media screen and (max-width: 1277px){
    
}
@media screen and (max-width: 1200px){
   width: 500px;
}
@media screen and (max-width: 555px){
    width: 90%;
}
//*Fin Responsive*/
}

@media screen and (max-width: 1277px){
   /* border: 1px solid greenyellow;*/
    max-width: 1050px;
}
@media screen and (max-width: 1200px){
    flex-direction: column;
    width: 80%;
}
`